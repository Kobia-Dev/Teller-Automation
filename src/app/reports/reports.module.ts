import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { MpesaReportsComponent } from './mpesa-reports/mpesa-reports.component';
import { FundsTransferReportComponent } from './funds-transfer-report/funds-transfer-report.component';
import { InternationalMoneyTransferComponent } from './international-money-transfer/international-money-transfer.component';
import { ForexComponent } from './forex/forex.component';


@NgModule({
  declarations: [
    MpesaReportsComponent,
    FundsTransferReportComponent,
    InternationalMoneyTransferComponent,
    ForexComponent,
    
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule
  ]
})
export class ReportsModule { }
