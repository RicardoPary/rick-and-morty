import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {ROUTE_TRANSITION} from "../../../app.animation";
import {ActivatedRoute} from "@angular/router";
import {RickAndMortyService} from "../rick-and-morty.service";

@Component({
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
  animations: [...ROUTE_TRANSITION],
  host: {'[@routeTransition]': ''}
})
export class CharacterComponent implements OnInit {

  entity: any;

  constructor(private activatedRoute: ActivatedRoute,
              private reportingService: RickAndMortyService) {

  }

  ngOnInit() {

    this.reportingService.getCharacterById(this.activatedRoute.snapshot.params.id).subscribe(res => {
      console.log('DDDDDDDDDDDDDDDDDD', res.body);
      this.entity = res.body;
    });


  }

}
