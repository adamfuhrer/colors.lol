import {AfterViewInit, Component, HostBinding, Inject, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {Color} from '../color-palette/color-palette.component';
import {ColorFilterService} from '../../services/color-filter.service';
import {Subscription} from 'rxjs';
import * as chroma from 'chroma-js';
import palettes from '../../palettes.json';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit, OnDestroy, AfterViewInit {
  @HostBinding('class.is-showing-single-palette') paletteParam: string;
  palettes = [];
  unfilteredPalettes = [];
  colorFilterSubscription: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private colorFilterService: ColorFilterService,
              private titleService: Title,
              private renderer2: Renderer2,
              @Inject(DOCUMENT) private document) {
    this.palettes = Object.values(palettes)[0];
    this.unfilteredPalettes = [...this.palettes];
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.paletteParam = params.get('id');
      this.setBrowserTitle(this.paletteParam);
    });

    // Compare the filter color to the colors of each palette
    // If there is a similar match, show the color in list of filtered results
    this.colorFilterSubscription = this.colorFilterService.filterColor.subscribe(color => {
      if (color) {
        this.palettes = [...this.unfilteredPalettes].filter(palette => {
          return palette.some(paletteColor => paletteColor.description.toLowerCase().indexOf(color.description) >= 0) ||
            palette.some(paletteColor => chroma.deltaE(paletteColor.hex, color.hex) < 18) ||
            palette.some(paletteColor => chroma.deltaE(paletteColor.hex, chroma(color.hex).desaturate(1.4)) < 14);
        });
      } else {
        this.palettes = this.unfilteredPalettes;
      }

      if (this.document.getElementById('carbonads')) {
        this.renderer2.setStyle(this.document.getElementById('carbonads'), 'order', '1');
      }
    });
  }

  ngAfterViewInit() {
    this.insertCarbonAdIntoDOM();
  }

  ngOnDestroy(): void {
    if (this.colorFilterSubscription) {
      this.colorFilterSubscription.unsubscribe();
    }
  }

  getPaletteId(palette: Color[]): string {
    return palette[0].description.split(' ')[0];
  }

  getRandomPaletteId(): string {
    return this.getPaletteId(this.unfilteredPalettes[this.generateRandomNumber(this.unfilteredPalettes.length - 1)]);
  }

  isPaletteFound(): boolean {
    const paletteIds = this.unfilteredPalettes.map(palette => this.getPaletteId(palette));
    return paletteIds.includes(this.paletteParam);
  }

  setBrowserTitle(title: string): void {
    if (title && this.isPaletteFound()) {
      this.titleService.setTitle(title + ' color palette | colors.lol');
    } else if (title && title === 'random') {
      this.colorFilterService.emitFilterColor(null);
      const randomPalette = this.getRandomPaletteId();

      this.router.navigateByUrl('/' + randomPalette, { replaceUrl: true }).then(() => {
        this.titleService.setTitle(randomPalette + ' color palette | colors.lol');
      });
    } else if (title && !this.isPaletteFound()) {
      this.titleService.setTitle('Unknown color palette | colors.lol');
    } else {
      this.titleService.setTitle('colors.lol - Overly descriptive color palettes');
    }
  }

  insertCarbonAdIntoDOM(): void {
    const script = this.renderer2.createElement('script');
    script.type = 'text/javascript';
    script.src = '//cdn.carbonads.com/carbon.js?serve=CE7IV23M&placement=colorslol';
    script.id = '_carbonads_js';

    setTimeout(() => {
      if (this.document.querySelector('.view-all')) {
        this.insertElementAfter(script, this.document.querySelector('.view-all'));
      } else {
        this.insertElementAfter(script, this.document.querySelector('.color-palette'));
      }
    }, 0);
  }

  insertElementAfter(newElement, targetElement) {
    const parent = targetElement.parentNode;
    if (parent.lastChild === targetElement) {
      parent.appendChild(newElement);
    } else {
      parent.insertBefore(newElement, targetElement.nextSibling);
    }
  }

  generateRandomNumber(num: number): number {
    return Math.floor(Math.random() * (num + 1));
  }
}
