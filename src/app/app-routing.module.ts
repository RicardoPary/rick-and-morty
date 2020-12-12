import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from './core/layout/layout.component';
import {CharacterComponent} from "./pages/rick-and-morty/character/character.component";
import {EpisodeComponent} from "./pages/rick-and-morty/episode/episode.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '', redirectTo: 'rick-and-morty', pathMatch: 'full'
      },
      {
        path: 'rick-and-morty',
        loadChildren: () => import('./pages/rick-and-morty/rick-and-morty.module').then(m => m.RickAndMortyModule)
      },
      {
        path: 'character/:id',
        component: CharacterComponent
      },
      {
        path: 'episode/:id',
        component: EpisodeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
