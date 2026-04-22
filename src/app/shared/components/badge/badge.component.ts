import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

const BADGE_CLASSES: Record<string, string> = {
  // Order statuses
  pending:       'bg-amber-500/20 text-amber-400 border border-amber-500/30',
  processing:    'bg-blue-500/20 text-blue-400 border border-blue-500/30',
  shipped:       'bg-indigo-500/20 text-indigo-400 border border-indigo-500/30',
  delivered:     'bg-green-500/20 text-green-400 border border-green-500/30',
  cancelled:     'bg-red-500/20 text-red-400 border border-red-500/30',
  // User statuses
  active:        'bg-green-500/20 text-green-400 border border-green-500/30',
  inactive:      'bg-slate-500/20 text-slate-400 border border-slate-500/30',
  suspended:     'bg-red-500/20 text-red-400 border border-red-500/30',
  // Stock statuses
  in_stock:      'bg-green-500/20 text-green-400 border border-green-500/30',
  low_stock:     'bg-amber-500/20 text-amber-400 border border-amber-500/30',
  out_of_stock:  'bg-red-500/20 text-red-400 border border-red-500/30',
  // Audit actions
  CREATE:        'bg-blue-500/20 text-blue-400 border border-blue-500/30',
  UPDATE:        'bg-amber-500/20 text-amber-400 border border-amber-500/30',
  DELETE:        'bg-red-500/20 text-red-400 border border-red-500/30',
  LOGIN:         'bg-green-500/20 text-green-400 border border-green-500/30',
  LOGOUT:        'bg-slate-500/20 text-slate-400 border border-slate-500/30',
  ACCESS_DENIED: 'bg-red-500/20 text-red-400 border border-red-500/30',
  // Roles
  super_admin:   'bg-purple-500/20 text-purple-400 border border-purple-500/30',
  finance_admin: 'bg-blue-500/20 text-blue-400 border border-blue-500/30',
  analyst:       'bg-indigo-500/20 text-indigo-400 border border-indigo-500/30',
  viewer:        'bg-slate-500/20 text-slate-400 border border-slate-500/30',
};

@Component({
  selector: 'app-badge',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold"
          [class]="badgeClasses">
      {{ label || status }}
    </span>
  `
})
export class BadgeComponent {
  @Input() status = '';
  @Input() label = '';

  get badgeClasses(): string {
    return BADGE_CLASSES[this.status] ?? 'bg-slate-500/20 text-slate-400 border border-slate-500/30';
  }
}
