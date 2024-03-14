import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionsRoutingModule } from './transactions-routing.module';
import { TellersTransactionsComponent } from './tellers-transactions/tellers-transactions.component';
import { AtmsTransactionsComponent } from './atms-transactions/atms-transactions.component';
import { MpesaTransactionsComponent } from './mpesa-transactions/mpesa-transactions.component';
import { FundsTransferComponent } from './funds-transfer/funds-transfer.component';
import { BackOfficeTransactionsComponent } from './back-office-transactions/back-office-transactions.component';
import { EndOfDayTransactionsComponent } from './end-of-day-transactions/end-of-day-transactions.component';
import { RtgsComponent } from '../tabs/rtgs/rtgs.component';


@NgModule({
  declarations: [
    TellersTransactionsComponent,
    AtmsTransactionsComponent,
    MpesaTransactionsComponent,
    FundsTransferComponent,
    BackOfficeTransactionsComponent,
    EndOfDayTransactionsComponent,
    RtgsComponent
    
  ],
  imports: [
    CommonModule,
    TransactionsRoutingModule
  ]
})
export class TransactionsModule { }
