import { Component } from '@angular/core';
import { NavigationEnd, Router} from '@angular/router';
import { filter } from 'rxjs/operators';

declare var gtag;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(router: Router) {
    const navEndEvent$ = router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    );
    navEndEvent$.subscribe((event: NavigationEnd) => {
      window.scrollTo(0, 0);
      gtag('config', 'UA-43089105-5', {
        'page_path': event.urlAfterRedirects
      });
    });
  }
}
