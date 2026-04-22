import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { MOCK_PRODUCTS } from '../../core/mock-data/products.mock';
import { Product, StockStatus } from '../../core/models/product.model';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InventoryComponent implements OnInit {
  products: Product[] = [...MOCK_PRODUCTS];
  filteredProducts: Product[] = [];
  searchTerm = '';
  filterStatus: StockStatus | '' = '';
  filterCategory = '';

  get inStockCount():    number { return this.products.filter(p => p.status === 'in_stock').length; }
  get lowStockCount():   number { return this.products.filter(p => p.status === 'low_stock').length; }
  get outOfStockCount(): number { return this.products.filter(p => p.status === 'out_of_stock').length; }

  get categories(): string[] {
    return [...new Set(this.products.map(p => p.category))].sort();
  }

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void { this.applyFilters(); }

  applyFilters(): void {
    this.filteredProducts = this.products.filter(p => {
      const matchSearch   = !this.searchTerm || p.name.toLowerCase().includes(this.searchTerm.toLowerCase()) || p.sku.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchStatus   = !this.filterStatus   || p.status   === this.filterStatus;
      const matchCategory = !this.filterCategory || p.category === this.filterCategory;
      return matchSearch && matchStatus && matchCategory;
    });
    this.cdr.markForCheck();
  }

  stockPercent(product: Product): number {
    if (product.minStock === 0) return 100;
    return Math.min(100, Math.round((product.stock / (product.minStock * 3)) * 100));
  }

  stockBarColor(status: StockStatus): string {
    const map: Record<StockStatus, string> = {
      in_stock: 'bg-green-500', low_stock: 'bg-amber-500', out_of_stock: 'bg-red-500'
    };
    return map[status];
  }
}
