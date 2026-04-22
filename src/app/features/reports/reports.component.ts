import {
  Component, OnInit, OnDestroy, AfterViewInit,
  ViewChild, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef,
} from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { MONTHLY_REVENUE, CATEGORY_BREAKDOWN, MonthlyRevenue, CategoryBreakdown } from '../../core/mock-data/analytics.mock';

Chart.register(...registerables);

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReportsComponent implements AfterViewInit, OnDestroy {
  @ViewChild('barChart') barChartRef!: ElementRef<HTMLCanvasElement>;

  selectedYear = '2024';
  private chart: Chart | null = null;

  totalRevenue  = MONTHLY_REVENUE.reduce((s: number, m: MonthlyRevenue) => s + m.revenue,  0);
  totalExpenses = MONTHLY_REVENUE.reduce((s: number, m: MonthlyRevenue) => s + m.expenses, 0);
  totalProfit   = MONTHLY_REVENUE.reduce((s: number, m: MonthlyRevenue) => s + m.profit,   0);

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void { this.buildChart(); }

  private buildChart(): void {
    if (this.chart) this.chart.destroy();
    const months:    string[] = MONTHLY_REVENUE.map((m: MonthlyRevenue) => m.month);
    const revenues:  number[] = MONTHLY_REVENUE.map((m: MonthlyRevenue) => m.revenue  / 1000);
    const expenses:  number[] = MONTHLY_REVENUE.map((m: MonthlyRevenue) => m.expenses / 1000);
    const profits:   number[] = MONTHLY_REVENUE.map((m: MonthlyRevenue) => m.profit   / 1000);

    this.chart = new Chart(this.barChartRef.nativeElement, {
      type: 'bar',
      data: {
        labels: months,
        datasets: [
          { label: 'Revenue',  data: revenues, backgroundColor: 'rgba(108,99,255,0.7)', borderColor: '#6c63ff', borderWidth: 1, borderRadius: 6 },
          { label: 'Expenses', data: expenses, backgroundColor: 'rgba(239,68,68,0.5)',  borderColor: '#ef4444', borderWidth: 1, borderRadius: 6 },
          { label: 'Profit',   data: profits,  backgroundColor: 'rgba(0,214,143,0.6)',  borderColor: '#00d68f', borderWidth: 1, borderRadius: 6 },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: { mode: 'index', intersect: false },
        plugins: {
          legend: { labels: { color: '#94a3b8', font: { family: 'Inter', size: 12 } } },
          tooltip: {
            backgroundColor: 'rgba(15,23,42,0.95)', borderColor: 'rgba(255,255,255,0.1)', borderWidth: 1,
            titleColor: '#e2e8f0', bodyColor: '#94a3b8',
            callbacks: { label: (ctx) => ` $${ctx.formattedValue}K` },
          },
        },
        scales: {
          x: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#64748b' } },
          y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#64748b', callback: (v) => `$${v}K` } },
        },
      },
    });
  }

  ngOnDestroy(): void { this.chart?.destroy(); }

  formatCurrency(val: number): string {
    return '$' + (val / 1000000).toFixed(2) + 'M';
  }
}
