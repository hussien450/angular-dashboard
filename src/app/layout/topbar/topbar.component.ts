import { Component, Input, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthService, AuthUser } from '../../core/auth/auth.service';

const PAGE_TITLES: Record<string, string> = {
  '/dashboard':  'Dashboard',
  '/users':      'User Management',
  '/orders':     'Orders',
  '/inventory':  'Inventory',
  '/reports':    'Reports',
  '/audit-log':  'Audit Log',
  '/settings':   'Settings',
};

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopbarComponent implements OnInit {
  @Input() sidebarCollapsed = false;

  pageTitle = 'Dashboard';
  currentUser: AuthUser | null = null;
  showUserMenu = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
      this.cdr.markForCheck();
    });

    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(e => {
        const navEnd = e as NavigationEnd;
        const matched = Object.keys(PAGE_TITLES).find(k => navEnd.url.startsWith(k));
        this.pageTitle = matched ? PAGE_TITLES[matched] : 'CorpAdmin';
        this.showUserMenu = false;
        this.cdr.markForCheck();
      });

    const matched = Object.keys(PAGE_TITLES).find(k => this.router.url.startsWith(k));
    this.pageTitle = matched ? PAGE_TITLES[matched] : 'CorpAdmin';
  }

  toggleUserMenu(): void {
    this.showUserMenu = !this.showUserMenu;
  }

  logout(): void {
    this.authService.logout();
  }

  getRoleLabel(role: string): string {
    return role?.replace(/_/g, ' ') ?? '';
  }
}
