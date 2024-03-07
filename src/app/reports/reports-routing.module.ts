import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MpesaReportsComponent } from './mpesa-reports/mpesa-reports.component';

const routes: Routes = [
  {path: '', component: MpesaReportsComponent},
  {path: 'mpesa-reports', component: MpesaReportsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
