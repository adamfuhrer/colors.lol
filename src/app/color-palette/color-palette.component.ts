import {Component, Input} from '@angular/core';

export interface Color {
  hex: string;
  description: string;
}

@Component({
  selector: 'app-color-palette',
  templateUrl: './color-palette.component.html',
  styleUrls: ['./color-palette.component.scss']
})
export class ColorPaletteComponent {
  @Input() colors: Color[];
  @Input() isPaletteDirectionVertical = true;
  @Input() isShowingLinkButton = true;

  randomNumFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  getRouterLink() {
    return '/' + this.colors[0].description.split(' ')[0];
  }
}
