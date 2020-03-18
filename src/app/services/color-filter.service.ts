import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class ColorFilterService {
  private ColorFilters: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  emitFilterColor(color: string) {
    this.ColorFilters.next(color);
  }

  get filterColor(): Observable<string> {
    return this.ColorFilters;
  }
}
