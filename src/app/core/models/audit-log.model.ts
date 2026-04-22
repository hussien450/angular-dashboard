export type AuditAction = 'CREATE' | 'UPDATE' | 'DELETE' | 'LOGIN' | 'LOGOUT' | 'ACCESS_DENIED';

export interface AuditLog {
  id: number;
  userId: number;
  userName: string;
  userRole: string;
  action: AuditAction;
  resource: string;
  details: string;
  ipAddress: string;
  timestamp: string;
}
