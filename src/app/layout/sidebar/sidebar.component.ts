import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, AuthUser } from '../../core/auth/auth.service';

interface NavItem {
  label: string;
  icon: string;
  route: string;
  roles: string[];
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Dashboard',  icon: 'fa-gauge',         route: '/dashboard',  roles: ['super_admin','finance_admin','analyst','viewer'] },
  { label: 'Users',      icon: 'fa-users',          route: '/users',      roles: ['super_admin'] },
  { label: 'Orders',     icon: 'fa-cart-shopping',  route: '/orders',     roles: ['super_admin','finance_admin'] },
  { label: 'Inventory',  icon: 'fa-boxes-stacked',  route: '/inventory',  roles: ['super_admin','finance_admin','analyst'] },
  { label: 'Reports',    icon: 'fa-chart-bar',       route: '/reports',    roles: ['super_admin','finance_admin'] },
  { label: 'Audit Log',  icon: 'fa-shield-halved',   route: '/audit-log',  roles: ['super_admin'] },
  { label: 'Settings',   icon: 'fa-gear',            route: '/settings',   roles: ['super_admin'] },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent implements OnInit {
  collapsed = false;
  currentUser: AuthUser | null = null;
  navItems: NavItem[] = [];

  constructor(
    private authService: AuthService,
    private router: Router,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
      this.navItems = NAV_ITEMS.filter(item =>
        user ? item.roles.includes(user.role) : false
      );
      this.cdr.markForCheck();
    });
  }

  isActive(route: string): boolean {
    return this.router.url.startsWith(route);
  }

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
  }

  logout(): void {
    this.authService.logout();
  }

  getRoleLabel(role: string): string {
    return role?.replace(/_/g, ' ') ?? '';
  }
}
