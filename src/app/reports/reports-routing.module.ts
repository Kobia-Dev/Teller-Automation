import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MpesaReportsComponent } from './mpesa-reports/mpesa-reports.component';
import { FundsTransferReportComponent } from './funds-transfer-report/funds-transfer-report.component';
import { InternationalMoneyTransferComponent } from './international-money-transfer/international-money-transfer.component';
import { ForexComponent } from './forex/forex.component';

const routes: Routes = [
  {path: '', component: MpesaReportsComponent},
  {path: 'mpesa-reports', component: MpesaReportsComponent},
  {path: 'funds-transfer-report', component: FundsTransferReportComponent},
  {path: 'international-money-transfer', component: InternationalMoneyTransferComponent},
  {path: 'forex', component: ForexComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
