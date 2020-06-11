import {Component} from '@angular/core';
import {ColorFilterService} from '../../services/color-filter.service';
import {ActivationEnd, Router} from '@angular/router';
import {Color} from '../color-palette/color-palette.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  colorFilters = [
    { hex: '#e83a30', description: 'red' },
    { hex: '#e88c30', description: 'orange' },
    { hex: '#e8e230', description: 'yellow' },
    { hex: '#3ab650', description: 'green' },
    { hex: '#3bdeb8', description: 'teal' },
    { hex: '#3080e8', description: 'blue' },
    { hex: '#8a3cdd', description: 'purple' },
    { hex: '#e830c7', description: 'pink'}
  ];
  isShowingFilters = true;
  filterColor: Color = null;

  constructor(private colorFilterService: ColorFilterService,
              private router: Router) {
    this.router.events.subscribe(event => {
      // Only show filters on the homepage
      if (event instanceof ActivationEnd && event.snapshot.url) {
        this.isShowingFilters = event.snapshot.url.length === 0;
      }
    });
  }

  onFilterClick(color: Color) {
    this.colorFilterService.emitFilterColor(color);
    this.filterColor = color;
  }
}
