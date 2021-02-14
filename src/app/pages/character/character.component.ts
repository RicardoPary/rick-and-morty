import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import * as fromRoot from '../../reducers/index';
import {Store} from '@ngrx/store';
import {CharacterService} from "./character.service";
import {ROUTE_TRANSITION} from "../../app.animation";
import {BehaviorSubject, Subscription} from "rxjs";

@Component({
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
  animations: [...ROUTE_TRANSITION],
  host: {'[@routeTransition]': ''}
})

export class CharacterComponent implements OnInit, OnDestroy {

  items = new BehaviorSubject<any[]>([]);
  subs: Subscription;

  constructor(
    private store: Store<fromRoot.State>,
    private cd: ChangeDetectorRef,
    private rickAndMortyService: CharacterService
  ) {

    this.rickAndMortyService.currentPagination().subscribe(res => {
      this.subs = this.rickAndMortyService.getCharacters(res.page).subscribe(res => {
        this.items.next(res.body.results);
      });
    });

  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.subs?.unsubscribe();
  }

  previous() {
    const aux = this.rickAndMortyService.getPagination();
    aux.page = aux.page - 1
    aux.page > 0 ? this.rickAndMortyService.sendPagination(aux) : '';
  }

  next() {
    const aux = this.rickAndMortyService.getPagination();
    aux.page = aux.page + 1
    this.rickAndMortyService.sendPagination(aux);
  }

}
