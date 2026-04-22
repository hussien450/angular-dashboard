import { Product } from '../models/product.model';

export const MOCK_PRODUCTS: Product[] = [
  { id: 1,  name: 'Server Rack 42U',          sku: 'SRV-RACK-42',  category: 'Infrastructure',  stock: 14,  minStock: 5,  price: 1200,  status: 'in_stock',     supplier: 'DataCenter Pro',   lastRestocked: '2024-04-01' },
  { id: 2,  name: 'UPS 3000VA',               sku: 'UPS-3KVA-001', category: 'Power',           stock: 8,   minStock: 5,  price: 450,   status: 'in_stock',     supplier: 'PowerSure Ltd.',   lastRestocked: '2024-03-28' },
  { id: 3,  name: 'Network Switch 24P',        sku: 'NSW-24P-GIG',  category: 'Networking',      stock: 3,   minStock: 5,  price: 320,   status: 'low_stock',    supplier: 'NetGear Corp.',    lastRestocked: '2024-03-15' },
  { id: 4,  name: 'Barcode Scanner',           sku: 'SCN-BAR-2D',   category: 'Peripherals',     stock: 22,  minStock: 8,  price: 89,    status: 'in_stock',     supplier: 'ScanTech',         lastRestocked: '2024-04-05' },
  { id: 5,  name: 'Laptop 15"',               sku: 'LPT-15-PRO',   category: 'Compute',         stock: 0,   minStock: 10, price: 780,   status: 'out_of_stock', supplier: 'CompuDirect',      lastRestocked: '2024-02-20' },
  { id: 6,  name: 'Wireless Mouse',           sku: 'MSE-WRL-BLK',  category: 'Peripherals',     stock: 55,  minStock: 15, price: 22,    status: 'in_stock',     supplier: 'AccessPoint',      lastRestocked: '2024-04-10' },
  { id: 7,  name: 'Firewall Appliance',        sku: 'FW-APL-ENT',   category: 'Security',        stock: 6,   minStock: 3,  price: 2100,  status: 'in_stock',     supplier: 'SecureNet',        lastRestocked: '2024-03-22' },
  { id: 8,  name: 'IP Camera 4K',             sku: 'CAM-4K-IP',    category: 'Security',        stock: 2,   minStock: 5,  price: 210,   status: 'low_stock',    supplier: 'VisionTech',       lastRestocked: '2024-03-10' },
  { id: 9,  name: 'Storage NAS 24TB',          sku: 'NAS-24TB-ENT', category: 'Storage',         stock: 9,   minStock: 4,  price: 1850,  status: 'in_stock',     supplier: 'StoreMax',         lastRestocked: '2024-04-08' },
  { id: 10, name: 'Receipt Printer',           sku: 'PRT-RCT-THM',  category: 'Peripherals',     stock: 18,  minStock: 6,  price: 185,   status: 'in_stock',     supplier: 'PrintStar',        lastRestocked: '2024-04-02' },
  { id: 11, name: 'Workstation Pro',           sku: 'WST-PRO-X64',  category: 'Compute',         stock: 4,   minStock: 5,  price: 2200,  status: 'low_stock',    supplier: 'CompuDirect',      lastRestocked: '2024-03-30' },
  { id: 12, name: 'POS Terminal',              sku: 'POS-TRM-010',  category: 'Retail',          stock: 11,  minStock: 5,  price: 650,   status: 'in_stock',     supplier: 'RetailTech',       lastRestocked: '2024-04-06' },
  { id: 13, name: 'Environmental Sensor',      sku: 'SEN-ENV-IOT',  category: 'IoT',             stock: 0,   minStock: 10, price: 130,   status: 'out_of_stock', supplier: 'SensorLab',        lastRestocked: '2024-02-15' },
  { id: 14, name: 'Thin Client',               sku: 'THN-CLT-L01',  category: 'Compute',         stock: 25,  minStock: 8,  price: 280,   status: 'in_stock',     supplier: 'CompuDirect',      lastRestocked: '2024-04-09' },
  { id: 15, name: 'Industrial Tablet',         sku: 'TAB-IND-10',   category: 'Mobile',          stock: 7,   minStock: 8,  price: 430,   status: 'low_stock',    supplier: 'RugedTech',        lastRestocked: '2024-03-20' },
  { id: 16, name: 'LED Display 55"',           sku: 'DSP-LED-55',   category: 'Displays',        stock: 12,  minStock: 4,  price: 980,   status: 'in_stock',     supplier: 'ViewMax',          lastRestocked: '2024-04-07' },
  { id: 17, name: 'Fiber Media Converter',      sku: 'FBR-CNV-SFP',  category: 'Networking',      stock: 1,   minStock: 10, price: 65,    status: 'low_stock',    supplier: 'NetGear Corp.',    lastRestocked: '2024-03-05' },
  { id: 18, name: 'Smart Thermostat',          sku: 'THM-SRT-001',  category: 'IoT',             stock: 30,  minStock: 10, price: 95,    status: 'in_stock',     supplier: 'SmartHome Tech',   lastRestocked: '2024-04-11' },
  { id: 19, name: 'Industrial PC',             sku: 'IPC-IND-X86',  category: 'Compute',         stock: 0,   minStock: 5,  price: 750,   status: 'out_of_stock', supplier: 'IndustrialSys',    lastRestocked: '2024-01-30' },
  { id: 20, name: 'Medical Tablet 10"',        sku: 'TAB-MED-10',   category: 'Medical',         stock: 5,   minStock: 6,  price: 560,   status: 'low_stock',    supplier: 'MedTech Devices',  lastRestocked: '2024-03-25' },
];
