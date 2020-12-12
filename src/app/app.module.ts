import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { RouteHandlerModule } from './core/route-handler/route-handler.module';
import { HttpClientModule } from '@angular/common/http';
import {EpisodeComponent} from "./pages/rick-and-morty/episode/episode.component";
import {CharacterComponent} from "./pages/rick-and-morty/character/character.component";
import {RickAndMortyService} from "./pages/rick-and-morty/rick-and-morty.service";
import {FlexLayoutModule} from "@angular/flex-layout";
import { ServiceWorkerModule } from '@angular/service-worker';
import {PageHeaderModule} from "./core/page-header/page-header.module";
import {BreadcrumbsModule} from "./core/breadcrumbs/breadcrumbs.module";

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
    RouteHandlerModule,
    FlexLayoutModule,
    PageHeaderModule,
    BreadcrumbsModule,
  ],
  providers: [RickAndMortyService],
  declarations: [AppComponent, EpisodeComponent, CharacterComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
