import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RtgsComponent } from '../tabs/rtgs/rtgs.component';
import { EftComponent } from '../tabs/eft/eft.component';
import { SwiftComponent } from '../tabs/swift/swift.component';
import { InternalTransferComponent } from '../tabs/internal-transfer/internal-transfer.component';
import { WesternUnionComponent } from '../tabs/western-union/western-union.component';
import { MoneyGramComponent } from '../tabs/money-gram/money-gram.component';
import { TellerReportComponent } from './teller-report/teller-report.component';
import { AllTransactionsReportComponent } from './all-transactions-report/all-transactions-report.component';
import { CustomerReportComponent } from './customer-report/customer-report.component';
import { DepositReportComponent } from './deposit-report/deposit-report.component';
import { WithdrawalReportComponent } from './withdrawal-report/withdrawal-report.component';

const routes: Routes = [
  {path: '', component: AllTransactionsReportComponent},
  {path: 'rtgs', component: RtgsComponent},
  {path: 'eft', component: EftComponent},
  {path: 'swift', component: SwiftComponent},
  {path: 'internal-transfer', component: InternalTransferComponent},
  {path: 'money-gram', component: MoneyGramComponent},
  {path: 'western-union', component: WesternUnionComponent},
  {path: 'all-transactions-report', component: AllTransactionsReportComponent},
  {path: 'customer-report', component: CustomerReportComponent},
  {path: 'deposit-report', component: DepositReportComponent},
  {path: 'withdrawal-report', component: WithdrawalReportComponent},
  {path: 'teller-report', component : TellerReportComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
