import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AuthGuard } from './core/auth/auth.guard';
import { RoleGuard } from './core/auth/role.guard';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule),
      },
      {
        path: 'users',
        canActivate: [RoleGuard],
        data: { roles: ['super_admin'] },
        loadChildren: () => import('./features/users/users.module').then(m => m.UsersModule),
      },
      {
        path: 'orders',
        canActivate: [RoleGuard],
        data: { roles: ['super_admin', 'finance_admin'] },
        loadChildren: () => import('./features/orders/orders.module').then(m => m.OrdersModule),
      },
      {
        path: 'inventory',
        canActivate: [RoleGuard],
        data: { roles: ['super_admin', 'finance_admin', 'analyst'] },
        loadChildren: () => import('./features/inventory/inventory.module').then(m => m.InventoryModule),
      },
      {
        path: 'reports',
        canActivate: [RoleGuard],
        data: { roles: ['super_admin', 'finance_admin'] },
        loadChildren: () => import('./features/reports/reports.module').then(m => m.ReportsModule),
      },
      {
        path: 'audit-log',
        canActivate: [RoleGuard],
        data: { roles: ['super_admin'] },
        loadChildren: () => import('./features/audit-log/audit-log.module').then(m => m.AuditLogModule),
      },
      {
        path: 'settings',
        canActivate: [RoleGuard],
        data: { roles: ['super_admin'] },
        loadChildren: () => import('./features/settings/settings.module').then(m => m.SettingsModule),
      },
    ],
  },
  { path: '**', redirectTo: 'dashboard' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
