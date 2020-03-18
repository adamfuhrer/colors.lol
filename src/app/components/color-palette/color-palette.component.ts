import {Component, Input, OnInit} from '@angular/core';

export interface Color {
  hex: string;
  description: string;
}

@Component({
  selector: 'app-color-palette',
  templateUrl: './color-palette.component.html',
  styleUrls: ['./color-palette.component.scss']
})
export class ColorPaletteComponent implements OnInit {
  @Input() colors: Color[];
  @Input() isPaletteDirectionVertical = true;
  @Input() isShowingLinkButton = true;
  paletteIdLength: number;

  ngOnInit() {
    this.paletteIdLength = this.getPaletteId().length;
  }

  getPaletteId(): string {
    return this.colors[0].description.split(' ')[0];
  }
}
