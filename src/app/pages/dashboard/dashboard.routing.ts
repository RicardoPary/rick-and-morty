import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import {DashboardStatisticsComponent} from "./dashboard-statistics/dashboard-statistics.component";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
