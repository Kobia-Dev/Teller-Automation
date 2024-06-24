import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MpesaReportsComponent } from './mpesa-reports/mpesa-reports.component';
import { FundsTransferReportComponent } from './funds-transfer-report/funds-transfer-report.component';
import { InternationalMoneyTransferComponent } from './international-money-transfer/international-money-transfer.component';
import { ForexComponent } from './forex/forex.component';
import { RtgsComponent } from '../tabs/rtgs/rtgs.component';
import { EftComponent } from '../tabs/eft/eft.component';
import { SwiftComponent } from '../tabs/swift/swift.component';
import { InternalTransferComponent } from '../tabs/internal-transfer/internal-transfer.component';
import { WesternUnionComponent } from '../tabs/western-union/western-union.component';
import { MoneyGramComponent } from '../tabs/money-gram/money-gram.component';
import { TellerReportComponent } from './teller-report/teller-report.component';

const routes: Routes = [
  {path: '', component: FundsTransferReportComponent},
  {path: 'mpesa-reports', component: MpesaReportsComponent},
  {path: 'funds-transfer-report', component: FundsTransferReportComponent},
  {path: 'international-money-transfer', component: InternationalMoneyTransferComponent},
  {path: 'forex', component: ForexComponent},
  {path: 'rtgs', component: RtgsComponent},
  {path: 'eft', component: EftComponent},
  {path: 'swift', component: SwiftComponent},
  {path: 'internal-transfer', component: InternalTransferComponent},
  {path: 'money-gram', component: MoneyGramComponent},
  {path: 'western-union', component: WesternUnionComponent},
  { path : 'teller-report', component : TellerReportComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
