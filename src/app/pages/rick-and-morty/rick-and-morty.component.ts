import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import * as fromRoot from '../../reducers/index';
import {Store} from '@ngrx/store';
import {RickAndMortyService} from "./rick-and-morty.service";
import {ROUTE_TRANSITION} from "../../app.animation";

@Component({
  templateUrl: './rick-and-morty.component.html',
  styleUrls: ['./rick-and-morty.component.scss'],
  animations: [...ROUTE_TRANSITION],
  host: {'[@routeTransition]': ''}
})

export class RickAndMortyComponent implements OnInit {

  items = [];

  constructor(
    private store: Store<fromRoot.State>,
    private cd: ChangeDetectorRef,
    private reportingService: RickAndMortyService
  ) {

  }

  ngOnInit() {

    this.reportingService.getCharacters(1).subscribe(res => {
      this.items = res.body.results;
    });

  }

}
