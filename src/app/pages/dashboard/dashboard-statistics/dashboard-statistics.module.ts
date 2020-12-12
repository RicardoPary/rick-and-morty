import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardStatisticsComponent} from './dashboard-statistics.component';
import {PageHeaderModule} from '../../../core/page-header/page-header.module';
import {BreadcrumbsModule} from '../../../core/breadcrumbs/breadcrumbs.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {DashboardStatisticsRoutingModule} from './dashboard-statistics-routing.module';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {ReportingService} from "./reporting.service";

@NgModule({
  imports: [
    CommonModule,
    DashboardStatisticsRoutingModule,
    PageHeaderModule,
    BreadcrumbsModule,

    FlexLayoutModule,

    MatCardModule,
    MatIconModule,
    MatDividerModule
  ],
  declarations: [DashboardStatisticsComponent],
  exports: [DashboardStatisticsComponent],
  providers: [
    ReportingService
  ]
})

export class DashboardStatisticsModule {
}
