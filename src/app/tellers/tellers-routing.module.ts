import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TellerComponent } from './teller/teller.component';
import { TrsansactionPerTellerComponent } from './trsansaction-per-teller/trsansaction-per-teller.component';

const routes: Routes = [
  {path: '', component: TellerComponent},
  {path: 'teller', component: TellerComponent},
  {path: 'transaction-per-teller', component: TrsansactionPerTellerComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TellersRoutingModule { }
