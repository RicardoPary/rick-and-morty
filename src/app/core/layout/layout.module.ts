import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatIconModule, MatRippleModule, MatSidenavModule } from '@angular/material';
import { SidenavModule } from '../sidenav/sidenav.module';
import { ToolbarModule } from '../toolbar/toolbar.module';
import { RouterModule } from '@angular/router';
import { ScrollbarService } from '../scrollbar/scrollbar.service';
import {SettingsModule} from '../settings/settings.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatSidenavModule,
    SidenavModule,
    SettingsModule,
    ToolbarModule,
    MatIconModule,
    MatRippleModule,
    MatButtonModule
  ],
  declarations: [LayoutComponent],
  exports: [LayoutComponent],
  providers: [ScrollbarService]
})
export class LayoutModule { }
