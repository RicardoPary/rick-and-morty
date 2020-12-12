import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ROUTE_TRANSITION} from '../../../app.animation';
import * as fromRoot from '../../../reducers/index';
import {Store} from '@ngrx/store';
import {ReportingService} from "./reporting.service";

@Component({
  selector: 'elastic-dashboard-statistics',
  templateUrl: './dashboard-statistics.component.html',
  styleUrls: ['./dashboard-statistics.component.scss'],
  animations: [...ROUTE_TRANSITION],
  host: {'[@routeTransition]': ''}
})
export class DashboardStatisticsComponent implements OnInit {

  items = [];

  constructor(
    private store: Store<fromRoot.State>,
    private cd: ChangeDetectorRef,
    private reportingService: ReportingService
  ) {

  }

  ngOnInit() {

    this.reportingService.getCharacters().subscribe(res => {
      this.items = res.body.results;
    });

  }

}
