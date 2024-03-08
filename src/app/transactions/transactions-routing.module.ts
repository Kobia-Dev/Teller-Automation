import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TellersTransactionsComponent } from './tellers-transactions/tellers-transactions.component';
import { AtmsTransactionsComponent } from './atms-transactions/atms-transactions.component';
import { MpesaTransactionsComponent } from './mpesa-transactions/mpesa-transactions.component';
import { FundsTransferComponent } from './funds-transfer/funds-transfer.component';
import { BackOfficeTransactionsComponent } from './back-office-transactions/back-office-transactions.component';
import { EndOfDayTransactionsComponent } from './end-of-day-transactions/end-of-day-transactions.component';

const routes: Routes = [
  {path:'', component: AtmsTransactionsComponent},
  {path:'tellers-transactions', component: TellersTransactionsComponent},
  {path:'atms-transactions', component: AtmsTransactionsComponent},
  {path:'mpesa-transactions', component: MpesaTransactionsComponent},
  {path:'funds-transactions', component: FundsTransferComponent},
  {path:'back-office-transactions', component: BackOfficeTransactionsComponent},
  {path:'end-of-day-transactions', component: EndOfDayTransactionsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionsRoutingModule { }
