import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { MOCK_ORDERS } from '../../core/mock-data/orders.mock';
import { Order, OrderStatus } from '../../core/models/order.model';

const STATUS_FLOW: Record<OrderStatus, OrderStatus | null> = {
  pending:    'processing',
  processing: 'shipped',
  shipped:    'delivered',
  delivered:  null,
  cancelled:  null,
};

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrdersComponent implements OnInit {
  orders: Order[] = [...MOCK_ORDERS];
  filteredOrders: Order[] = [];
  searchTerm = '';
  filterStatus = '';
  selectedOrder: Order | null = null;

  readonly statuses: OrderStatus[] = ['pending', 'processing', 'shipped', 'delivered', 'cancelled'];

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void { this.applyFilters(); }

  applyFilters(): void {
    this.filteredOrders = this.orders.filter(o => {
      const matchSearch = !this.searchTerm ||
        o.id.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        o.customerName.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchStatus = !this.filterStatus || o.status === this.filterStatus;
      return matchSearch && matchStatus;
    });
    this.cdr.markForCheck();
  }

  advanceStatus(order: Order): void {
    const next = STATUS_FLOW[order.status];
    if (next) {
      const idx = this.orders.findIndex(o => o.id === order.id);
      if (idx >= 0) {
        this.orders[idx] = { ...this.orders[idx], status: next, updatedAt: new Date().toISOString().split('T')[0] };
        if (this.selectedOrder?.id === order.id) {
          this.selectedOrder = this.orders[idx];
        }
        this.applyFilters();
      }
    }
  }

  cancelOrder(order: Order): void {
    const idx = this.orders.findIndex(o => o.id === order.id);
    if (idx >= 0) {
      this.orders[idx] = { ...this.orders[idx], status: 'cancelled' };
      if (this.selectedOrder?.id === order.id) this.selectedOrder = this.orders[idx];
      this.applyFilters();
    }
  }

  selectOrder(order: Order): void {
    this.selectedOrder = this.selectedOrder?.id === order.id ? null : order;
    this.cdr.markForCheck();
  }

  nextStatus(status: OrderStatus): OrderStatus | null { return STATUS_FLOW[status]; }

  canCancel(status: OrderStatus): boolean { return status === 'pending' || status === 'processing'; }

  getRowClass(order: Order): string {
    const base = 'border-b border-white/5 cursor-pointer transition-colors duration-150 ';
    return base + (this.selectedOrder?.id === order.id ? 'bg-white/10' : 'hover:bg-white/5');
  }

  orderTotal(order: Order): number { return order.total; }
}
