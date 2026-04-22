import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StatCardComponent } from './components/stat-card/stat-card.component';
import { BadgeComponent } from './components/badge/badge.component';

@NgModule({
  declarations: [StatCardComponent, BadgeComponent],
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    StatCardComponent,
    BadgeComponent,
  ],
})
export class SharedModule {}
