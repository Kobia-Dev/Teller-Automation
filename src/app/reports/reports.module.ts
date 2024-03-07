import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { MpesaReportsComponent } from './mpesa-reports/mpesa-reports.component';


@NgModule({
  declarations: [
    MpesaReportsComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule
  ]
})
export class ReportsModule { }
