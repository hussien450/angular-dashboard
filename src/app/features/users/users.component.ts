import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MOCK_USERS } from '../../core/mock-data/users.mock';
import { User, UserRole, UserStatus } from '../../core/models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent implements OnInit {
  users: User[] = [...MOCK_USERS];
  filteredUsers: User[] = [];
  searchTerm = '';
  filterRole = '';
  filterStatus = '';

  showModal = false;
  isEditing = false;
  editingUser: User | null = null;
  showDeleteConfirm = false;
  deletingUser: User | null = null;

  userForm: FormGroup;

  readonly roles: UserRole[] = ['super_admin', 'finance_admin', 'analyst', 'viewer'];
  readonly statuses: UserStatus[] = ['active', 'inactive', 'suspended'];
  readonly departments = ['Engineering','Finance','Analytics','Operations','HR','Sales','Legal','Marketing','Product','Design','Support'];

  constructor(private fb: FormBuilder, private cdr: ChangeDetectorRef) {
    this.userForm = this.fb.group({
      name:       ['', Validators.required],
      email:      ['', [Validators.required, Validators.email]],
      role:       ['viewer', Validators.required],
      status:     ['active', Validators.required],
      department: ['', Validators.required],
    });
  }

  ngOnInit(): void { this.applyFilters(); }

  applyFilters(): void {
    this.filteredUsers = this.users.filter(u => {
      const matchSearch = !this.searchTerm ||
        u.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        u.email.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchRole   = !this.filterRole   || u.role   === this.filterRole;
      const matchStatus = !this.filterStatus || u.status === this.filterStatus;
      return matchSearch && matchRole && matchStatus;
    });
    this.cdr.markForCheck();
  }

  openAddModal(): void {
    this.isEditing = false;
    this.editingUser = null;
    this.userForm.reset({ role: 'viewer', status: 'active' });
    this.showModal = true;
    this.cdr.markForCheck();
  }

  openEditModal(user: User): void {
    this.isEditing = true;
    this.editingUser = user;
    this.userForm.patchValue(user);
    this.showModal = true;
    this.cdr.markForCheck();
  }

  closeModal(): void { this.showModal = false; this.cdr.markForCheck(); }

  saveUser(): void {
    if (this.userForm.invalid) return;
    const val = this.userForm.value;
    if (this.isEditing && this.editingUser) {
      const idx = this.users.findIndex(u => u.id === this.editingUser!.id);
      if (idx >= 0) this.users[idx] = { ...this.editingUser, ...val };
    } else {
      const newUser: User = {
        id: Math.max(...this.users.map(u => u.id)) + 1,
        ...val,
        lastLogin: '—',
        createdAt: new Date().toISOString().split('T')[0],
      };
      this.users = [newUser, ...this.users];
    }
    this.applyFilters();
    this.closeModal();
  }

  confirmDelete(user: User): void {
    this.deletingUser = user;
    this.showDeleteConfirm = true;
    this.cdr.markForCheck();
  }

  deleteUser(): void {
    if (this.deletingUser) {
      this.users = this.users.filter(u => u.id !== this.deletingUser!.id);
      this.applyFilters();
    }
    this.showDeleteConfirm = false;
    this.deletingUser = null;
    this.cdr.markForCheck();
  }

  cancelDelete(): void { this.showDeleteConfirm = false; this.deletingUser = null; this.cdr.markForCheck(); }

  formatRole(role: string): string { return role.replace(/_/g, ' '); }

  getInitials(name: string): string {
    return name.split(' ').map(n => n[0]).join('');
  }
}
