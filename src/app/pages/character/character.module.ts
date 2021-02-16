// ANGULAR
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
// ANGULAR MATERIAL
import {RouterModule, Routes} from "@angular/router";
// MODULES
import {ScrollingModule} from "@angular/cdk/scrolling";
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {MatMenuModule} from "@angular/material/menu";
import {MatSelectModule} from "@angular/material/select";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FlexLayoutModule} from '@angular/flex-layout';
import {ScrollbarModule} from '../../core/scrollbar/scrollbar.module';
import {PageHeaderModule} from "../../core/page-header/page-header.module";
import {BreadcrumbsModule} from "../../core/breadcrumbs/breadcrumbs.module";
// COMPONENTS
import {CharacterComponent} from './character.component';
// SERVICES
import {CharacterService} from "./character.service";
import {MatIconModule} from "@angular/material/icon";
import {MatTabsModule} from "@angular/material/tabs";
import {MatButtonModule} from "@angular/material/button";

const routes: Routes = [
  {path: '', component: CharacterComponent}
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MatIconModule,
    MatTabsModule,
    MatButtonModule,
    MatMenuModule,
    ScrollbarModule,
    ScrollingModule,
    PageHeaderModule,
    BreadcrumbsModule,
    MatSelectModule,
    MatFormFieldModule,

    MatCardModule,
    MatDividerModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    CharacterComponent
  ],
  providers: [
    CharacterService
  ]
})

export class CharacterModule {
}
