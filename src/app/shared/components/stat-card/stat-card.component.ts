import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stat-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="glass-card p-6 relative overflow-hidden group
                hover:border-indigo-500/30 transition-all duration-300 cursor-default">
      <div class="flex items-start justify-between">
        <div>
          <p class="text-xs text-slate-400 font-semibold tracking-widest uppercase">{{ label }}</p>
          <p class="text-3xl font-bold text-slate-100 mt-2 stat-number">{{ value }}</p>
          <div class="flex items-center gap-1.5 mt-3">
            <i class="fas text-sm"
               [class.fa-arrow-trend-up]="change >= 0"
               [class.fa-arrow-trend-down]="change < 0"
               [class.text-green-400]="change >= 0"
               [class.text-red-400]="change < 0"
               aria-hidden="true"></i>
            <span class="text-sm font-semibold"
                  [class.text-green-400]="change >= 0"
                  [class.text-red-400]="change < 0">
              {{ change >= 0 ? '+' : '' }}{{ change }}%
            </span>
            <span class="text-slate-500 text-xs">vs last month</span>
          </div>
        </div>
        <div class="w-12 h-12 rounded-xl flex items-center justify-center bg-white/5
                    group-hover:scale-110 group-hover:bg-indigo-500/10 transition-all duration-300">
          <i [class]="'fas text-xl ' + icon + ' ' + iconColor" aria-hidden="true"></i>
        </div>
      </div>
      <div class="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r
                  from-indigo-500 to-violet-500 rounded-t-2xl opacity-70"></div>
    </div>
  `
})
export class StatCardComponent {
  @Input() label = '';
  @Input() value = '';
  @Input() change = 0;
  @Input() icon = '';
  @Input() iconColor = '';
}
