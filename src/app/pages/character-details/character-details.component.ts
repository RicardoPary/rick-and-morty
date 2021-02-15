import {Component, OnInit} from '@angular/core';
import {ROUTE_TRANSITION} from '../../app.animation';
import {ActivatedRoute} from "@angular/router";
import {BehaviorSubject, Subscription} from "rxjs";
import {CharacterDetailsService} from "./character-details.service";

@Component({
  selector: 'elastic-project-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss'],
  animations: [...ROUTE_TRANSITION],
  host: {'[@routeTransition]': ''}
})
export class CharacterDetailsComponent implements OnInit {

  character = new BehaviorSubject<any>(null);
  subs: Subscription;


  constructor(private activatedRoute: ActivatedRoute,
              private characterDetailsService: CharacterDetailsService) {
  }

  ngOnInit() {

    const id = this.activatedRoute.snapshot.params.id;
    this.subs = this.characterDetailsService.getCharacterById(id).subscribe(res => {
      this.character.next(res.body);
    });


  }

  ngOnDestroy() {
    this.subs?.unsubscribe();
  }


}
