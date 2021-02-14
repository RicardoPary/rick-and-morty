import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from './core/layout/layout.component';
import {CharacterDetailsComponent} from "./pages/character-details/character-details.component";
import {EpisodeDetailsComponent} from "./pages/episode-details/episode-details.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '', redirectTo: 'character', pathMatch: 'full'
      },
      {
        path: 'character',
        loadChildren: () => import('./pages/character/character.module').then(m => m.CharacterModule)
      },
      {
        path: 'character-details/:id',
        component: CharacterDetailsComponent
      },
      {
        path: 'episode-details/:id',
        component: EpisodeDetailsComponent
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
