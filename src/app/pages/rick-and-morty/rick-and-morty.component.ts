import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import * as fromRoot from '../../reducers/index';
import {Store} from '@ngrx/store';
import {RickAndMortyService} from "./rick-and-morty.service";
import {ROUTE_TRANSITION} from "../../app.animation";
import {BehaviorSubject, Subscription} from "rxjs";

@Component({
  templateUrl: './rick-and-morty.component.html',
  styleUrls: ['./rick-and-morty.component.scss'],
  animations: [...ROUTE_TRANSITION],
  host: {'[@routeTransition]': ''}
})

export class RickAndMortyComponent implements OnInit, OnDestroy {

  items = new BehaviorSubject<any[]>([]);
  subs: Subscription;

  constructor(
    private store: Store<fromRoot.State>,
    private cd: ChangeDetectorRef,
    private rickAndMortyService: RickAndMortyService
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
