import {Component, OnDestroy, OnInit} from '@angular/core';
import {ROUTE_TRANSITION} from "../../app.animation";
import {ActivatedRoute} from "@angular/router";
import {CharacterService} from "../character/character.service";
import {BehaviorSubject, Subscription} from "rxjs";

@Component({
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss'],
  animations: [...ROUTE_TRANSITION],
  host: {'[@routeTransition]': ''}
})
export class CharacterDetailsComponent implements OnInit, OnDestroy {

  id: number;
  entity = new BehaviorSubject<any>(null);
  subs: Subscription;

  constructor(private activatedRoute: ActivatedRoute,
              private reportingService: CharacterService) {

  }

  ngOnInit() {

    this.id = this.activatedRoute.snapshot.params.id;
    this.subs = this.reportingService.getCharacterById(this.id).subscribe(res => {
      this.entity.next(res.body);
    });

  }

  ngOnDestroy() {
    this.subs?.unsubscribe();
  }

}
