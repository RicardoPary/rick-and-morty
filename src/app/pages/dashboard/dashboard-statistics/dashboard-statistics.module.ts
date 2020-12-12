import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardStatisticsComponent} from './dashboard-statistics.component';
import {PageHeaderModule} from '../../../core/page-header/page-header.module';
import {BreadcrumbsModule} from '../../../core/breadcrumbs/breadcrumbs.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {StateWidgetModule} from './state-widget/state-widget.module';
import {BarchartWidgetModule} from './barchart-widget/barchart-widget.module';
import {AreachartWidgetModule} from './areachart-widget/areachart-widget.module';
import {RecentsalesWidgetModule} from './recentsales-widget/recentsales-widget.module';
import {AdvancedPieChartWidgetModule} from './advanced-pie-chart-widget/advanced-pie-chart-widget.module';
import {MapsWidgetModule} from './maps-widget/maps-widget.module';
import {SalesWidgetModule} from './sales-widget/sales-widget.module';
import {DashboardStatisticsRoutingModule} from './dashboard-statistics-routing.module';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {ReportingService} from "./reporting.service";
import {EpisodeComponent} from "./episode/episode.component";
import {CharacterComponent} from "./character/character.component";

@NgModule({
  imports: [
    CommonModule,
    DashboardStatisticsRoutingModule,
    PageHeaderModule,
    BreadcrumbsModule,

    FlexLayoutModule,

    // Widgets
    StateWidgetModule,
    BarchartWidgetModule,
    AreachartWidgetModule,
    RecentsalesWidgetModule,
    AdvancedPieChartWidgetModule,
    MapsWidgetModule,
    SalesWidgetModule,

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
