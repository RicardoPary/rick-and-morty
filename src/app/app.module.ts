import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagesModule } from './pages/pages.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { RouteHandlerModule } from './core/route-handler/route-handler.module';
import { HttpClientModule } from '@angular/common/http';
import {EpisodeComponent} from "./pages/dashboard/episode/episode.component";
import {CharacterComponent} from "./pages/dashboard/character/character.component";
import {ReportingService} from "./pages/dashboard/dashboard-statistics/reporting.service";
import {FlexLayoutModule} from "@angular/flex-layout";
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),

    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 50 }) : [],
    EffectsModule.forRoot([]),
    AppRoutingModule,
    CoreModule,
    PagesModule,
    RouteHandlerModule,
    FlexLayoutModule
  ],
  providers: [ReportingService],
  declarations: [AppComponent, EpisodeComponent, CharacterComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
