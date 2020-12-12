import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
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

  @Input() hideHeader: boolean;

  layoutGap = {
    'lt-md': '16px',
    'gt-md': '24px'
  };

  flexWidth = {
    'lt-sm': 'auto',
    'gt-sm': `calc(50% - ${this.layoutGap['lt-md']}`,
    'gt-md': `calc(50% - ${this.layoutGap['gt-md']}`
  };

  layout: string;

  layoutColumnOnBoxed = 'row';

  items = [];

  constructor(
    private store: Store<fromRoot.State>,
    private cd: ChangeDetectorRef,
    private reportingService: ReportingService
  ) {

  }

  ngOnInit() {

    this.reportingService.getCharacters().subscribe(res => {
      console.log('AAAAAAAAAAAAAAAAAAAAAA', res);


      this.items = res.body.results;
    });

    this.reportingService.getEpisodes().subscribe(res => {
      console.log('CCCCCCCCCCCCCC', res);

    });

    this.store.select(fromRoot.getLayout).subscribe((layout) => {
      this.layout = layout;

      if (layout === 'gamma') {
        this.layoutColumnOnBoxed = 'column';
      } else {
        this.layoutColumnOnBoxed = 'row';
      }

      this.cd.markForCheck();
    });
  }

}
