import {Component, OnDestroy, OnInit} from '@angular/core';
import {ROUTE_TRANSITION} from "../../../app.animation";
import {ActivatedRoute} from "@angular/router";
import {RickAndMortyService} from "../rick-and-morty.service";
import {Subscription} from "rxjs";

@Component({
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss'],
  animations: [...ROUTE_TRANSITION],
  host: {'[@routeTransition]': ''}
})
export class EpisodeComponent implements OnInit, OnDestroy {

  id: number;
  entity: any;
  subs: Subscription;

  constructor(private activatedRoute: ActivatedRoute,
              private reportingService: RickAndMortyService) {

  }

  ngOnInit() {

    this.id = this.activatedRoute.snapshot.params.id;
    this.subs = this.reportingService.getEpisodeById(this.id).subscribe(res => {
      this.entity = res.body;
    });

  }

  ngOnDestroy() {
    this.subs?.unsubscribe();
  }

}
