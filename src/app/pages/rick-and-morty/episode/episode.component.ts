import {Component, OnInit} from '@angular/core';
import {ROUTE_TRANSITION} from "../../../app.animation";
import {ActivatedRoute} from "@angular/router";
import {RickAndMortyService} from "../rick-and-morty.service";

@Component({
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss'],
  animations: [...ROUTE_TRANSITION],
  host: {'[@routeTransition]': ''}
})
export class EpisodeComponent implements OnInit {

  id: number;
  entity: any;

  constructor(private activatedRoute: ActivatedRoute,
              private reportingService: RickAndMortyService) {

  }

  ngOnInit() {

    this.id = this.activatedRoute.snapshot.params.id;
    this.reportingService.getEpisodeById(this.id).subscribe(res => {
      console.log('DDDDDDDDDDDDDDDDDD', res.body);
      this.entity = res.body;
    });


  }


}
