import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { EftComponent } from '../tabs/eft/eft.component';
import { SwiftComponent } from '../tabs/swift/swift.component';
import { InternalTransferComponent } from '../tabs/internal-transfer/internal-transfer.component';
import { WesternUnionComponent } from '../tabs/western-union/western-union.component';
import { MoneyGramComponent } from '../tabs/money-gram/money-gram.component';
import { TellerReportComponent } from './teller-report/teller-report.component';

import { MatCardModule } from '@angular/material/card';
import { AllTransactionsReportComponent } from './all-transactions-report/all-transactions-report.component';
import { WithdrawalReportComponent } from './withdrawal-report/withdrawal-report.component';
import { DepositReportComponent } from './deposit-report/deposit-report.component';
import { CustomerReportComponent } from './customer-report/customer-report.component';



@NgModule({ 
  declarations: [
    // EftComponent,
    // SwiftComponent,
    // InternalTransferComponent,
    // WesternUnionComponent,
    // MoneyGramComponent,
    TellerReportComponent,
    AllTransactionsReportComponent,
    WithdrawalReportComponent,
    DepositReportComponent,
    CustomerReportComponent
    
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    MatCardModule
  ]
})
export class ReportsModule { }
