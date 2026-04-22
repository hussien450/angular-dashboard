import { User } from '../models/user.model';

export const MOCK_USERS: User[] = [
  { id: 1,  name: 'Sarah Chen',       email: 'sarah.chen@corp.com',       role: 'super_admin',   status: 'active',    department: 'Engineering',  lastLogin: '2024-04-22T10:30:00Z', createdAt: '2024-01-10' },
  { id: 2,  name: 'James Okafor',     email: 'james.okafor@corp.com',     role: 'finance_admin', status: 'active',    department: 'Finance',       lastLogin: '2024-04-22T09:15:00Z', createdAt: '2024-01-14' },
  { id: 3,  name: 'Maya Patel',       email: 'maya.patel@corp.com',       role: 'analyst',       status: 'active',    department: 'Analytics',    lastLogin: '2024-04-21T16:45:00Z', createdAt: '2024-02-01' },
  { id: 4,  name: 'Tom Rivera',       email: 'tom.rivera@corp.com',       role: 'viewer',        status: 'active',    department: 'Operations',   lastLogin: '2024-04-20T11:00:00Z', createdAt: '2024-02-15' },
  { id: 5,  name: 'Aisha Nkrumah',   email: 'aisha.nkrumah@corp.com',   role: 'analyst',       status: 'active',    department: 'Analytics',    lastLogin: '2024-04-22T08:30:00Z', createdAt: '2024-02-20' },
  { id: 6,  name: 'Luca Ferrari',    email: 'luca.ferrari@corp.com',    role: 'finance_admin', status: 'active',    department: 'Finance',       lastLogin: '2024-04-19T14:00:00Z', createdAt: '2024-03-01' },
  { id: 7,  name: 'Priya Sharma',    email: 'priya.sharma@corp.com',    role: 'viewer',        status: 'inactive',  department: 'HR',           lastLogin: '2024-03-30T10:00:00Z', createdAt: '2024-03-05' },
  { id: 8,  name: 'Carlos Mendez',   email: 'carlos.mendez@corp.com',   role: 'analyst',       status: 'active',    department: 'Sales',        lastLogin: '2024-04-22T07:45:00Z', createdAt: '2024-03-10' },
  { id: 9,  name: 'Elena Popescu',   email: 'elena.popescu@corp.com',   role: 'viewer',        status: 'active',    department: 'Legal',        lastLogin: '2024-04-18T12:30:00Z', createdAt: '2024-03-15' },
  { id: 10, name: 'David Kim',       email: 'david.kim@corp.com',       role: 'super_admin',   status: 'active',    department: 'Engineering',  lastLogin: '2024-04-22T11:00:00Z', createdAt: '2024-03-20' },
  { id: 11, name: 'Fatima Al-Zahra', email: 'fatima.alzahra@corp.com', role: 'finance_admin', status: 'active',    department: 'Finance',       lastLogin: '2024-04-21T09:00:00Z', createdAt: '2024-03-22' },
  { id: 12, name: 'Noah Williams',   email: 'noah.williams@corp.com',   role: 'analyst',       status: 'suspended', department: 'Marketing',    lastLogin: '2024-04-10T08:00:00Z', createdAt: '2024-03-25' },
  { id: 13, name: 'Yuki Tanaka',     email: 'yuki.tanaka@corp.com',     role: 'viewer',        status: 'active',    department: 'Product',      lastLogin: '2024-04-21T15:30:00Z', createdAt: '2024-04-01' },
  { id: 14, name: 'Ahmed Hassan',    email: 'ahmed.hassan@corp.com',    role: 'analyst',       status: 'active',    department: 'Analytics',    lastLogin: '2024-04-22T06:00:00Z', createdAt: '2024-04-02' },
  { id: 15, name: 'Sofia Rossi',     email: 'sofia.rossi@corp.com',     role: 'viewer',        status: 'active',    department: 'Design',       lastLogin: '2024-04-20T14:00:00Z', createdAt: '2024-04-05' },
  { id: 16, name: 'Marcus Johnson',  email: 'marcus.j@corp.com',        role: 'finance_admin', status: 'active',    department: 'Finance',       lastLogin: '2024-04-22T10:15:00Z', createdAt: '2024-04-08' },
  { id: 17, name: 'Ingrid Larsson',  email: 'ingrid.l@corp.com',        role: 'viewer',        status: 'inactive',  department: 'Support',      lastLogin: '2024-04-05T09:00:00Z', createdAt: '2024-04-10' },
  { id: 18, name: 'Omar Abdullahi',  email: 'omar.a@corp.com',          role: 'analyst',       status: 'active',    department: 'Operations',   lastLogin: '2024-04-22T08:00:00Z', createdAt: '2024-04-12' },
];
