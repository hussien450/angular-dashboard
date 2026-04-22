export type UserRole = 'super_admin' | 'finance_admin' | 'analyst' | 'viewer';
export type UserStatus = 'active' | 'inactive' | 'suspended';

export interface User {
  id: number;
  name: string;
  email: string;
  role: UserRole;
  status: UserStatus;
  department: string;
  lastLogin: string;
  createdAt: string;
}
