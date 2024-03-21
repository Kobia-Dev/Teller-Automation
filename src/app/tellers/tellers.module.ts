import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TellersRoutingModule } from './tellers-routing.module';
import { TellerComponent } from './teller/teller.component';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [
    TellerComponent
  ],
  imports: [
    CommonModule,
    TellersRoutingModule,
    MatPaginatorModule
  ]
})
export class TellersModule { }
