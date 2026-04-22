import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from '../../../core/auth/auth.service';
import { UserRole } from '../../../core/models/user.model';

interface DemoRole {
  role: UserRole;
  name: string;
  email: string;
  description: string;
  icon: string;
  color: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  demoRoles: DemoRole[] = [
    {
      role: 'super_admin',
      name: 'Sarah Chen',
      email: 'sarah.chen@corp.com',
      description: 'Full platform access — users, orders, audit logs, settings',
      icon: 'fa-crown',
      color: 'border-purple-500/40 hover:border-purple-500 hover:bg-purple-500/10',
    },
    {
      role: 'finance_admin',
      name: 'James Okafor',
      email: 'james.okafor@corp.com',
      description: 'Manage orders, view reports, access inventory',
      icon: 'fa-landmark',
      color: 'border-blue-500/40 hover:border-blue-500 hover:bg-blue-500/10',
    },
    {
      role: 'analyst',
      name: 'Maya Patel',
      email: 'maya.patel@corp.com',
      description: 'View dashboard, inventory data, and analytics',
      icon: 'fa-chart-pie',
      color: 'border-indigo-500/40 hover:border-indigo-500 hover:bg-indigo-500/10',
    },
    {
      role: 'viewer',
      name: 'Tom Rivera',
      email: 'tom.rivera@corp.com',
      description: 'Read-only dashboard access',
      icon: 'fa-eye',
      color: 'border-slate-500/40 hover:border-slate-400 hover:bg-slate-500/10',
    },
  ];

  constructor(private authService: AuthService) {}

  loginAs(role: UserRole): void {
    this.authService.login(role);
  }
}
