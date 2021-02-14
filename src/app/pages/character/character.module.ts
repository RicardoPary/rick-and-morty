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
    ScrollbarModule,
    ScrollingModule,
    PageHeaderModule,
    BreadcrumbsModule,

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
