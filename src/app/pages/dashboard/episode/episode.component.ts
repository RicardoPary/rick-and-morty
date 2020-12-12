import {Component, OnInit} from '@angular/core';
import {ROUTE_TRANSITION} from "../../../app.animation";
import {ActivatedRoute} from "@angular/router";
import {ReportingService} from "../dashboard-statistics/reporting.service";

@Component({
  selector: 'elastic-dashboard-statistics',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss'],
  animations: [...ROUTE_TRANSITION],
  host: {'[@routeTransition]': ''}
})
export class EpisodeComponent implements OnInit {

  entity: any;

  constructor(private activatedRoute: ActivatedRoute,
              private reportingService: ReportingService) {

  }

  ngOnInit() {

    console.log('SSSSSSSSSSSS', this.activatedRoute.snapshot.params.id);


    this.reportingService.getEpisodeById(this.activatedRoute.snapshot.params.id).subscribe(res => {
      console.log('DDDDDDDDDDDDDDDDDD', res.body);
      this.entity = res.body;
    });


  }


}
