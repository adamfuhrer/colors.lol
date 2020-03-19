import {Component} from '@angular/core';
import {ColorFilterService} from '../../services/color-filter.service';
import {ActivationStart, Router} from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  colorFilters = ['#e83a30', '#e88c30', '#e8e230', '#30c849', '#30e8bd', '#3080e8', '#8930e8', '#e830c7'];
  isShowingFilters = true;
  filterColor = null;

  constructor(private colorFilterService: ColorFilterService,
              private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof ActivationStart) {
        if (event.snapshot.url) {
          // Only show filters on the homepage
          this.isShowingFilters = event.snapshot.url.length === 0;
        }
      }
    });
  }

  onFilterClick(color: string) {
    this.colorFilterService.emitFilterColor(color);
    this.filterColor = color;
  }
}
