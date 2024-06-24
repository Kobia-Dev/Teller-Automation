import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { MpesaReportsComponent } from './mpesa-reports/mpesa-reports.component';
import { FundsTransferReportComponent } from './funds-transfer-report/funds-transfer-report.component';
import { InternationalMoneyTransferComponent } from './international-money-transfer/international-money-transfer.component';
import { ForexComponent } from './forex/forex.component';
//import { RtgsComponent } from '../tabs/rtgs/rtgs.component';
import { EftComponent } from '../tabs/eft/eft.component';
import { SwiftComponent } from '../tabs/swift/swift.component';
import { InternalTransferComponent } from '../tabs/internal-transfer/internal-transfer.component';
import { WesternUnionComponent } from '../tabs/western-union/western-union.component';
import { MoneyGramComponent } from '../tabs/money-gram/money-gram.component';
import { TellerReportComponent } from './teller-report/teller-report.component';

import { MatCardModule } from '@angular/material/card';



@NgModule({ 
  declarations: [
    MpesaReportsComponent,
    FundsTransferReportComponent,
    InternationalMoneyTransferComponent,
    ForexComponent,
    //RtgsComponent,
    EftComponent,
    SwiftComponent,
    InternalTransferComponent,
    WesternUnionComponent,
    MoneyGramComponent,
    TellerReportComponent
    
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    MatCardModule
  ]
})
export class ReportsModule { }
