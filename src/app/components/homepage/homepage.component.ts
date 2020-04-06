import {Component, HostBinding, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {Color} from '../color-palette/color-palette.component';
import {ColorFilterService} from '../../services/color-filter.service';

import * as chroma from 'chroma-js';
import * as colors from '../../colors.json';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  @HostBinding('class.is-showing-single-palette') paletteParam: string;
  palettes = [];
  unfilteredPalettes = [];

  constructor(private route: ActivatedRoute,
              private colorFilterService: ColorFilterService,
              private titleService: Title) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.paletteParam = params.get('id');

      if (this.paletteParam) {
        this.titleService.setTitle(this.paletteParam + ' palette | colors.lol');
      } else {
        this.titleService.setTitle('colors.lol - Overly descriptive color palettes');
      }
    });

    this.colorFilterService.filterColor.subscribe(color => {
      if (color) {
        this.palettes = this.unfilteredPalettes;
        // Compare the filter color to the colours of each palette. If there is a similar match, show the color in list of filtered results
        this.palettes = this.palettes.filter(palette => {
          return palette.some(c => chroma.deltaE(c.hex, color.hex) < 20) ||
            palette.some(c => chroma.deltaE(c.hex, chroma(color.hex).desaturate(1.4)) < 18);
        });
      } else {
        this.palettes = this.unfilteredPalettes;
      }
    });

    // Parse JSON
    const palettes = [];
    const keys = Object.keys(colors);
    keys.forEach(key => {
      palettes.push(colors[key]);
    });

    this.palettes = palettes[0];
    this.unfilteredPalettes = this.palettes;
  }

  getPaletteParamId(palette: Color[]): string {
    return palette[0].description.split(' ')[0];
  }

  isPaletteFound(): boolean {
    const paletteIds = [];
    this.palettes.forEach(palette => {
      paletteIds.push(palette[0].description.split(' ')[0]);
    });
    return paletteIds.includes(this.paletteParam);
  }
}
