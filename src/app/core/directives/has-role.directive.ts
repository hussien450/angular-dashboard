import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { UserRole } from '../models/user.model';

@Directive({ selector: '[appHasRole]' })
export class HasRoleDirective implements OnInit {
  @Input() appHasRole: UserRole[] = [];

  constructor(
    private templateRef: TemplateRef<unknown>,
    private viewContainer: ViewContainerRef,
    private authService: AuthService,
  ) {}

  ngOnInit(): void {
    if (this.authService.hasRole(this.appHasRole)) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
