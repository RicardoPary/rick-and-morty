import {Component, OnDestroy, OnInit} from '@angular/core';
import {ROUTE_TRANSITION} from '../../app.animation';
import {ActivatedRoute} from "@angular/router";
import {BehaviorSubject, Subscription} from "rxjs";
import {EpisodeDetailsService} from "./episode-details.service";

@Component({
  templateUrl: './episode-details.component.html',
  styleUrls: ['./episode-details.component.scss'],
  animations: [...ROUTE_TRANSITION],
  host: {'[@routeTransition]': ''}
})
export class EpisodeDetailsComponent implements OnInit, OnDestroy {

  episode = new BehaviorSubject<any>(null);
  subs: Subscription;

  constructor(private activatedRoute: ActivatedRoute,
              private episodeDetailsService: EpisodeDetailsService) {

  }

  ngOnInit() {

    const id = this.activatedRoute.snapshot.params.id;
    this.subs = this.episodeDetailsService.getEpisodeById(id).subscribe(res => {
      this.episode.next(res.body);
    });

  }

  ngOnDestroy() {
    this.subs?.unsubscribe();
  }

}
