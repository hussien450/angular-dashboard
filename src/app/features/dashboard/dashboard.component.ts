import {
  Component, OnInit, OnDestroy, AfterViewInit,
  ViewChild, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef,
} from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { KPI_STATS, MONTHLY_REVENUE, CATEGORY_BREAKDOWN, KpiStat, MonthlyRevenue, CategoryBreakdown } from '../../core/mock-data/analytics.mock';
import { MOCK_ORDERS } from '../../core/mock-data/orders.mock';
import { Order } from '../../core/models/order.model';

Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements AfterViewInit, OnDestroy {
  @ViewChild('revenueChart') revenueChartRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('categoryChart') categoryChartRef!: ElementRef<HTMLCanvasElement>;

  kpiStats: KpiStat[] = KPI_STATS;
  recentOrders: Order[] = MOCK_ORDERS.slice(0, 6);

  private charts: Chart[] = [];

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.buildRevenueChart();
    this.buildCategoryChart();
  }

  private buildRevenueChart(): void {
    const labels: string[] = MONTHLY_REVENUE.map((m: MonthlyRevenue) => m.month);
    const revenue: number[] = MONTHLY_REVENUE.map((m: MonthlyRevenue) => m.revenue / 1000);
    const profit:  number[] = MONTHLY_REVENUE.map((m: MonthlyRevenue) => m.profit  / 1000);

    const chart = new Chart(this.revenueChartRef.nativeElement, {
      type: 'line',
      data: {
        labels,
        datasets: [
          {
            label: 'Revenue (K)',
            data: revenue,
            borderColor: '#6c63ff',
            backgroundColor: 'rgba(108,99,255,0.12)',
            borderWidth: 2.5,
            fill: true,
            tension: 0.4,
            pointBackgroundColor: '#6c63ff',
            pointRadius: 3,
            pointHoverRadius: 6,
          },
          {
            label: 'Profit (K)',
            data: profit,
            borderColor: '#00d68f',
            backgroundColor: 'rgba(0,214,143,0.08)',
            borderWidth: 2,
            fill: true,
            tension: 0.4,
            pointBackgroundColor: '#00d68f',
            pointRadius: 3,
            pointHoverRadius: 6,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: { mode: 'index', intersect: false },
        plugins: {
          legend: { labels: { color: '#94a3b8', font: { family: 'Inter', size: 12 } } },
          tooltip: {
            backgroundColor: 'rgba(15,23,42,0.95)',
            borderColor: 'rgba(255,255,255,0.1)',
            borderWidth: 1,
            titleColor: '#e2e8f0',
            bodyColor: '#94a3b8',
            callbacks: { label: ctx => ` $${ctx.formattedValue}K` },
          },
        },
        scales: {
          x: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#64748b' } },
          y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#64748b', callback: v => `$${v}K` } },
        },
      },
    });
    this.charts.push(chart);
  }

  private buildCategoryChart(): void {
    const chart = new Chart(this.categoryChartRef.nativeElement, {
      type: 'doughnut',
      data: {
        labels: CATEGORY_BREAKDOWN.map((c: CategoryBreakdown) => c.category),
        datasets: [{
          data: CATEGORY_BREAKDOWN.map((c: CategoryBreakdown) => c.value),
          backgroundColor: CATEGORY_BREAKDOWN.map((c: CategoryBreakdown) => c.color + 'cc'),
          borderColor: CATEGORY_BREAKDOWN.map((c: CategoryBreakdown) => c.color),
          borderWidth: 1.5,
          hoverOffset: 8,
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: { color: '#94a3b8', padding: 12, font: { family: 'Inter', size: 11 } },
          },
          tooltip: {
            backgroundColor: 'rgba(15,23,42,0.95)',
            borderColor: 'rgba(255,255,255,0.1)',
            borderWidth: 1,
            titleColor: '#e2e8f0',
            bodyColor: '#94a3b8',
            callbacks: { label: ctx => ` ${ctx.label}: ${ctx.formattedValue}%` },
          },
        },
        cutout: '70%',
      },
    });
    this.charts.push(chart);
  }

  ngOnDestroy(): void {
    this.charts.forEach(c => c.destroy());
  }

  getStatusClass(status: string): string {
    const map: Record<string, string> = {
      delivered: 'bg-green-500/20 text-green-400',
      shipped:   'bg-indigo-500/20 text-indigo-400',
      processing:'bg-blue-500/20 text-blue-400',
      pending:   'bg-amber-500/20 text-amber-400',
      cancelled: 'bg-red-500/20 text-red-400',
    };
    return map[status] ?? 'bg-slate-500/20 text-slate-400';
  }
}
