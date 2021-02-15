// ANGULAR
import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
// RXJS
import {BehaviorSubject, Subscription} from "rxjs";
// NGRX
import * as fromRoot from '../../reducers/index';
import {Store} from "@ngrx/store";
// SERVICES
import {CharacterService} from "./character.service";
// OTHERS
import {ROUTE_TRANSITION} from '../../app.animation';

@Component({
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
  animations: [...ROUTE_TRANSITION],
  host: {'[@routeTransition]': ''}
})

export class CharacterComponent implements OnInit, OnDestroy {

  desktopWidth = `0 0 calc(33.3333% - 24px)`;
  tabletWidth = `0 0 calc(33.3333% - 24px)`;
  smallTabletWidth = `0 0 calc(50% - 24px)`;
  mobileWidth = `0 0 calc(100% - 24px)`;

  filter = 'ALL';

  items = new BehaviorSubject<any[]>([]);
  subs: Subscription;

  constructor(private store: Store<fromRoot.State>,
              private cd: ChangeDetectorRef,
              private rickAndMortyService: CharacterService) {

    this.rickAndMortyService.currentPagination().subscribe(res => {
      this.subs = this.rickAndMortyService.getCharacters(res.page).subscribe(
        res => this.items.next(res.body.results)
      );
    });

  }

  filterProjectsBy(selectEvent) {

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
