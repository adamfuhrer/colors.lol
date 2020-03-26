import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Color } from '../components/color-palette/color-palette.component';

@Injectable()
export class ColorFilterService {
  private ColorFilters: BehaviorSubject<Color> = new BehaviorSubject<Color>(null);

  emitFilterColor(color: Color) {
    this.ColorFilters.next(color);
  }

  get filterColor(): Observable<Color> {
    return this.ColorFilters;
  }
}
