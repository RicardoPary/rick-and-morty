// ANGULAR
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
// MODULES
import {MatIconModule} from "@angular/material/icon";
import {MatChipsModule} from "@angular/material/chips";
import {FlexLayoutModule} from '@angular/flex-layout';
import {PageHeaderModule} from "../../core/page-header/page-header.module";
import {BreadcrumbsModule} from "../../core/breadcrumbs/breadcrumbs.module";
// COMPONENTS
import {EpisodeDetailsComponent} from "./episode-details.component";
// SERVICES
import {EpisodeDetailsService} from "./episode-details.service";

const routes: Routes = [
  {path: '', component: EpisodeDetailsComponent}
];

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    PageHeaderModule,
    BreadcrumbsModule,
    RouterModule.forChild(routes),
    MatChipsModule,
    MatIconModule
  ],
  declarations: [
    EpisodeDetailsComponent
  ],
  providers: [
    EpisodeDetailsService
  ]
})

export class EpisodeDetailsModule {
}
