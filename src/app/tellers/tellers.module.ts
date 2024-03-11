import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TellersRoutingModule } from './tellers-routing.module';
import { TellerComponent } from './teller/teller.component';


@NgModule({
  declarations: [
    TellerComponent
  ],
  imports: [
    CommonModule,
    TellersRoutingModule
  ]
})
export class TellersModule { }
