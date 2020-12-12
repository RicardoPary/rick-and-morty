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
    private reportingService: RickAndMortyService
  ) {

  }

  ngOnInit() {

    this.subs = this.reportingService.getCharacters(1).subscribe(res => {
      this.items.next(res.body.results);
    });

  }

  ngOnDestroy() {
    this.subs?.unsubscribe();
  }

}
