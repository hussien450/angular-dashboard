export interface MonthlyRevenue {
  month: string;
  revenue: number;
  expenses: number;
  profit: number;
}

export interface CategoryBreakdown {
  category: string;
  value: number;
  color: string;
}

export interface KpiStat {
  label: string;
  value: string;
  change: number;
  icon: string;
  iconColor: string;
}

export const MONTHLY_REVENUE: MonthlyRevenue[] = [
  { month: 'Jan', revenue: 142000, expenses: 88000,  profit: 54000  },
  { month: 'Feb', revenue: 128000, expenses: 82000,  profit: 46000  },
  { month: 'Mar', revenue: 165000, expenses: 91000,  profit: 74000  },
  { month: 'Apr', revenue: 153000, expenses: 87000,  profit: 66000  },
  { month: 'May', revenue: 178000, expenses: 95000,  profit: 83000  },
  { month: 'Jun', revenue: 195000, expenses: 102000, profit: 93000  },
  { month: 'Jul', revenue: 182000, expenses: 98000,  profit: 84000  },
  { month: 'Aug', revenue: 210000, expenses: 108000, profit: 102000 },
  { month: 'Sep', revenue: 223000, expenses: 115000, profit: 108000 },
  { month: 'Oct', revenue: 241000, expenses: 120000, profit: 121000 },
  { month: 'Nov', revenue: 258000, expenses: 128000, profit: 130000 },
  { month: 'Dec', revenue: 287000, expenses: 140000, profit: 147000 },
];

export const CATEGORY_BREAKDOWN: CategoryBreakdown[] = [
  { category: 'Infrastructure', value: 32, color: '#6c63ff' },
  { category: 'Compute',        value: 25, color: '#3b82f6' },
  { category: 'Networking',     value: 18, color: '#06b6d4' },
  { category: 'Security',       value: 14, color: '#10b981' },
  { category: 'Peripherals',    value: 7,  color: '#f59e0b' },
  { category: 'Other',          value: 4,  color: '#6b7280' },
];

export const KPI_STATS: KpiStat[] = [
  { label: 'Total Revenue',   value: '$2.36M',  change: 18.4,  icon: 'fa-dollar-sign',   iconColor: 'text-indigo-400' },
  { label: 'Active Orders',   value: '1,247',   change: 12.1,  icon: 'fa-shopping-cart', iconColor: 'text-blue-400'   },
  { label: 'Total Users',     value: '18',      change: 5.6,   icon: 'fa-users',         iconColor: 'text-green-400'  },
  { label: 'Inventory Items', value: '20',      change: -2.3,  icon: 'fa-boxes-stacked', iconColor: 'text-amber-400'  },
];
