import {Component, HostBinding, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {Color} from '../color-palette/color-palette.component';
import {ColorFilterService} from '../../services/color-filter.service';
import {Subscription} from 'rxjs';

import * as chroma from 'chroma-js';
import palettes from '../../palettes.json';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit, OnDestroy {
  @HostBinding('class.is-showing-single-palette') paletteParam: string;
  palettes = [];
  unfilteredPalettes = [];
  colorFilterSubscription: Subscription;

  constructor(private route: ActivatedRoute,
              private colorFilterService: ColorFilterService,
              private titleService: Title) {
    const pals = [];
    for (const key in palettes) {
      pals.push(palettes[key]);
    }
    this.palettes = pals[0];
    this.unfilteredPalettes = this.palettes;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.paletteParam = params.get('id');

      if (this.paletteParam && this.isPaletteFound()) {
        this.titleService.setTitle(this.paletteParam + ' palette | colors.lol');
      } else if (this.paletteParam && !this.isPaletteFound()) {
        this.titleService.setTitle('Unknown palette | colors.lol');
      } else {
        this.titleService.setTitle('colors.lol - Overly descriptive color palettes');
      }
    });

    this.colorFilterSubscription = this.colorFilterService.filterColor.subscribe(color => {
      if (color) {
        this.palettes = this.unfilteredPalettes;
        // Compare the filter color to the colours of each palette
        // If there is a similar match, show the color in list of filtered results
        this.palettes = this.palettes.filter(palette => {
          return palette.some(c => chroma.deltaE(c.hex, color.hex) < 20) ||
            palette.some(c => chroma.deltaE(c.hex, chroma(color.hex).desaturate(1.4)) < 18);
        });
      } else {
        this.palettes = this.unfilteredPalettes;
      }
    });
  }

  ngOnDestroy(): void {
    if (this.colorFilterSubscription) {
      this.colorFilterSubscription.unsubscribe();
    }
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
