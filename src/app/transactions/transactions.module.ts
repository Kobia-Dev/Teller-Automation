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
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';


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
    TransactionsRoutingModule,
    MatFormFieldModule, 
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatPaginatorModule,
    MatTableModule
  ]
})
export class TransactionsModule { }
