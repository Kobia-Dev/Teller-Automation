import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TellersTransactionsComponent } from './tellers-transactions/tellers-transactions.component';
import { AtmsTransactionsComponent } from './atms-transactions/atms-transactions.component';
import { MpesaTransactionsComponent } from './mpesa-transactions/mpesa-transactions.component';
import { FundsTransferComponent } from './funds-transfer/funds-transfer.component';
import { BackOfficeTransactionsComponent } from './back-office-transactions/back-office-transactions.component';
import { EndOfDayTransactionsComponent } from './end-of-day-transactions/end-of-day-transactions.component';
import { TTransactionsComponent } from '../tabs/t-transactions/t-transactions.component';


const routes: Routes = [
  {path:'', component: TellersTransactionsComponent},
  {path:'tellers-transactions', component: TellersTransactionsComponent},
  {path:'atms-transactions', component: AtmsTransactionsComponent},
  {path:'mpesa-transactions', component: MpesaTransactionsComponent},
  {path:'funds-transactions', component: FundsTransferComponent},
  {path:'back-office-transactions', component: BackOfficeTransactionsComponent},
  {path:'end-of-day-transactions', component: EndOfDayTransactionsComponent},
  {path:'t-transactions', component: TTransactionsComponent},


 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionsRoutingModule { }
