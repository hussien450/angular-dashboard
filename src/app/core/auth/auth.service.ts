import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { UserRole } from '../models/user.model';

export interface AuthUser {
  id: number;
  name: string;
  email: string;
  role: UserRole;
  initials: string;
}

const ROLE_HIERARCHY: Record<UserRole, number> = {
  super_admin:   4,
  finance_admin: 3,
  analyst:       2,
  viewer:        1,
};

const DEMO_USERS: Record<UserRole, AuthUser> = {
  super_admin:   { id: 1, name: 'Sarah Chen',   email: 'sarah.chen@corp.com',   role: 'super_admin',   initials: 'SC' },
  finance_admin: { id: 2, name: 'James Okafor', email: 'james.okafor@corp.com', role: 'finance_admin', initials: 'JO' },
  analyst:       { id: 3, name: 'Maya Patel',   email: 'maya.patel@corp.com',   role: 'analyst',       initials: 'MP' },
  viewer:        { id: 4, name: 'Tom Rivera',   email: 'tom.rivera@corp.com',   role: 'viewer',        initials: 'TR' },
};

@Injectable({ providedIn: 'root' })
export class AuthService {
  private currentUserSubject = new BehaviorSubject<AuthUser | null>(null);
  currentUser$ = this.currentUserSubject.asObservable();

  constructor(private router: Router) {
    const stored = localStorage.getItem('corp_auth_user');
    if (stored) {
      try {
        this.currentUserSubject.next(JSON.parse(stored) as AuthUser);
      } catch {
        localStorage.removeItem('corp_auth_user');
      }
    }
  }

  login(role: UserRole): void {
    const user = DEMO_USERS[role];
    localStorage.setItem('corp_auth_user', JSON.stringify(user));
    this.currentUserSubject.next(user);
    this.router.navigate(['/dashboard']);
  }

  logout(): void {
    localStorage.removeItem('corp_auth_user');
    this.currentUserSubject.next(null);
    this.router.navigate(['/auth/login']);
  }

  get currentUser(): AuthUser | null {
    return this.currentUserSubject.value;
  }

  isAuthenticated(): boolean {
    return !!this.currentUserSubject.value;
  }

  hasRole(roles: UserRole[]): boolean {
    const user = this.currentUserSubject.value;
    return user ? roles.includes(user.role) : false;
  }

  hasMinRole(minRole: UserRole): boolean {
    const user = this.currentUserSubject.value;
    if (!user) return false;
    return ROLE_HIERARCHY[user.role] >= ROLE_HIERARCHY[minRole];
  }
}
