import {Component, OnDestroy, OnInit} from '@angular/core';
import {ROUTE_TRANSITION} from "../../app.animation";
import {ActivatedRoute} from "@angular/router";
import {CharacterService} from "../character/character.service";
import {BehaviorSubject, Subscription} from "rxjs";

@Component({
  templateUrl: './episode-details.component.html',
  styleUrls: ['./episode-details.component.scss'],
  animations: [...ROUTE_TRANSITION],
  host: {'[@routeTransition]': ''}
})
export class EpisodeDetailsComponent implements OnInit, OnDestroy {

  id: number;
  entity = new BehaviorSubject<any>(null);
  subs: Subscription;

  constructor(private activatedRoute: ActivatedRoute,
              private reportingService: CharacterService) {

  }

  ngOnInit() {

    this.id = this.activatedRoute.snapshot.params.id;
    this.subs = this.reportingService.getEpisodeById(this.id).subscribe(res => {
      this.entity.next(res.body);
    });

  }

  ngOnDestroy() {
    this.subs?.unsubscribe();
  }

}
