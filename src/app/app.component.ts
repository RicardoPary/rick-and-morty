import {Component} from '@angular/core';
import {MediaReplayService} from './core/utils/media-replay.service';

@Component({
  selector: 'elastic-root',
  template: `
    <elastic-route-handler></elastic-route-handler>
  `
})
export class AppComponent {

  constructor(mediaReplay: MediaReplayService) {
  }
}
