import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

interface SettingCard {
  title: string;
  icon: string;
  items: { label: string; value: string; type: 'text' | 'badge' }[];
}

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsComponent implements OnInit {
  settingCards: SettingCard[] = [
    {
      title: 'Authentication',
      icon: 'fa-shield-halved',
      items: [
        { label: 'JWT Algorithm',        value: 'RS256',        type: 'badge' },
        { label: 'Access Token TTL',     value: '15 minutes',   type: 'text'  },
        { label: 'Refresh Token TTL',    value: '7 days',       type: 'text'  },
        { label: 'Brute-force Lockout',  value: '5 attempts',   type: 'text'  },
        { label: 'httpOnly Cookies',     value: 'Enabled',      type: 'badge' },
      ],
    },
    {
      title: 'Security Headers',
      icon: 'fa-lock',
      items: [
        { label: 'HSTS',                 value: 'Enabled',      type: 'badge' },
        { label: 'CSP',                  value: 'Strict',       type: 'badge' },
        { label: 'X-Frame-Options',      value: 'DENY',         type: 'text'  },
        { label: 'X-Content-Type',       value: 'nosniff',      type: 'text'  },
        { label: 'Rate Limiting',        value: '100 req/min',  type: 'text'  },
      ],
    },
    {
      title: 'Database',
      icon: 'fa-database',
      items: [
        { label: 'Engine',               value: 'PostgreSQL 15', type: 'text' },
        { label: 'Connection Pool',      value: '20 max',        type: 'text' },
        { label: 'PII Encryption',       value: 'AES-256-GCM',   type: 'badge'},
        { label: 'Soft Deletes',         value: 'Enabled',       type: 'badge'},
        { label: 'Audit Log RLS',        value: 'Active',        type: 'badge'},
      ],
    },
    {
      title: 'Integrations',
      icon: 'fa-plug',
      items: [
        { label: 'Caching Layer',        value: 'Redis 7',       type: 'text' },
        { label: 'Analytics Cache TTL',  value: '5 minutes',     type: 'text' },
        { label: 'Email Provider',       value: 'SendGrid',      type: 'text' },
        { label: 'API Version',          value: 'v2.4.1',        type: 'badge'},
      ],
    },
  ];

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {}
}
