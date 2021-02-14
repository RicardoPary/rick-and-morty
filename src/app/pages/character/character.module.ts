import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CharacterComponent} from './character.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule, MatIconModule, MatTabsModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {ScrollbarModule} from '../../core/scrollbar/scrollbar.module';
import {ScrollingModule} from "@angular/cdk/scrolling";
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {RouterModule, Routes} from "@angular/router";
import {PageHeaderModule} from "../../core/page-header/page-header.module";
import {BreadcrumbsModule} from "../../core/breadcrumbs/breadcrumbs.module";
import {MatMenuModule} from "@angular/material/menu";
import {MatSelectModule} from "@angular/material/select";
import {MatFormFieldModule} from "@angular/material/form-field";

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


    FlexLayoutModule,

    MatCardModule,
    MatIconModule,
    MatDividerModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    CharacterComponent
  ]
})

export class CharacterModule {
}
