import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { MOCK_AUDIT_LOGS } from '../../core/mock-data/audit-logs.mock';
import { AuditLog, AuditAction } from '../../core/models/audit-log.model';

@Component({
  selector: 'app-audit-log',
  templateUrl: './audit-log.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuditLogComponent implements OnInit {
  logs: AuditLog[] = MOCK_AUDIT_LOGS;
  filteredLogs: AuditLog[] = [];
  searchTerm = '';
  filterAction: AuditAction | '' = '';

  readonly actions: AuditAction[] = ['CREATE','UPDATE','DELETE','LOGIN','LOGOUT','ACCESS_DENIED'];

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void { this.applyFilters(); }

  applyFilters(): void {
    this.filteredLogs = this.logs.filter(l => {
      const matchSearch = !this.searchTerm ||
        l.userName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        l.resource.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        l.details.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchAction = !this.filterAction || l.action === this.filterAction;
      return matchSearch && matchAction;
    });
    this.cdr.markForCheck();
  }

  formatTimestamp(ts: string): string {
    return new Date(ts).toLocaleString('en-GB', {
      day: '2-digit', month: 'short', year: 'numeric',
      hour: '2-digit', minute: '2-digit',
    });
  }
}
