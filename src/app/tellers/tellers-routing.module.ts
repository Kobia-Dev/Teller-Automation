import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TellerComponent } from './teller/teller.component';

const routes: Routes = [
  {path: '', component: TellerComponent},
  {path: 'teller', component: TellerComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TellersRoutingModule { }
