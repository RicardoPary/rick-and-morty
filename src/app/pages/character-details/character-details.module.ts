// ANGULAR
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
// MODULES
import {MatChipsModule} from "@angular/material/chips";
import {MatIconModule} from "@angular/material/icon";
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {BreadcrumbsModule} from "../../core/breadcrumbs/breadcrumbs.module";
import {PageHeaderModule} from "../../core/page-header/page-header.module";
// COMPONENTS
import {CharacterDetailsComponent} from "./character-details.component";
// SERVICES
import {CharacterDetailsService} from "./character-details.service";

const routes: Routes = [
  {path: '', component: CharacterDetailsComponent}
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    PageHeaderModule,
    BreadcrumbsModule,
    RouterModule.forChild(routes),
    MatProgressSpinnerModule,
    MatChipsModule,
    MatIconModule
  ],
  declarations: [
    CharacterDetailsComponent
  ],
  providers: [
    CharacterDetailsService
  ]
})

export class CharacterDetailsModule {
}
