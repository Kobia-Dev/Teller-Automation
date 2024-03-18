import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';
import { ActorsComponent } from './actors/actors.component';

const routes: Routes = [
  {path: '', component: ActorsComponent},
  {path: 'actors', component: ActorsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DashboardRoutingModule { }