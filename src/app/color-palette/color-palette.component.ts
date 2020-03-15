import {Component, Input, OnInit} from '@angular/core';

interface Color {
  hex: string;
  description: string;
  adjective: string;
}

@Component({
  selector: 'app-color-palette',
  templateUrl: './color-palette.component.html',
  styleUrls: ['./color-palette.component.scss']
})
export class ColorPaletteComponent implements OnInit {
  @Input() colors: Color[];
  @Input() isPaletteDirectionVertical = true;


  ngOnInit() {
  }

}
