import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Color} from '../color-palette/color-palette.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  paletteParam: string;
  palettes = [
    [
      {
        hex: '#107ab0',
        description: 'farraginous nice blue',
      },
      {
        hex: '#fdc1c5',
        description: 'scrubby pale rose'
      },
      {
        hex: '#fd5956',
        description: 'jerking grapefruit'
      }
    ],
    [
      {
        hex: '#e17701',
        description: 'calycinal pumpkin',
      },
      {
        hex: '#c65102',
        description: 'untangled dark orange'
      },
      {
        hex: '#ffd8b1',
        description: 'sorrowful light peach'
      }
    ],
    [
      {
        hex: '#00022e',
        description: 'unsatable dark navy blue',
      },
      {
        hex: '#ff073a',
        description: 'all-time neon red'
      },
      {
        hex: '#02066f',
        description: 'facial dark royal blue'
      }
    ],
    [
      {
        hex: '#6241c7',
        description: 'unstarched bluey purple',
      },
      {
        hex: '#89a0b0',
        description: 'adscript bluey grey'
      },
      {
        hex: '#ffc5cb',
        description: 'laced light rose'
      }
    ],
    [
      {
        hex: '#fea993',
        description: 'cabbalistical light salmon',
      },
      {
        hex: '#fe02a2',
        description: 'premeditative shocking pink'
      },
      {
        hex: '#fdee73',
        description: 'encircled sandy yellow'
      }
    ],
    [
      {
        hex: '#017374',
        description: 'arced deep turquoise',
      },
      {
        hex: '#d0fefe',
        description: 'distal pale blue'
      },
      {
        hex: '#1f3b4d',
        description: 'posttraumatic dark blue grey'
      }
    ],

    [
      {
        hex: '#000133',
        description: 'piscine very dark blue'
      },
      {
        hex: '#FC86AA',
        description: 'pinky photic'
      },
      {
        hex: '#d8dcd6',
        description: 'work-shy light grey ',
      }
    ],
    [
      {
        hex: '#9dbcd4',
        description: 'ectophytic light grey blue',
      },
      {
        hex: '#fffd01',
        description: 'store bright yellow'
      },
      {
        hex: '#6d5acf',
        description: 'undiagnosed light indigo'
      }
    ],
    [
      {
        hex: '#99F764',
        description: 'no-nonsense light grass green'
      },
      {
        hex: '#7A002B',
        description: 'motorable bordeaux'
      },
      {
        hex: '#A00398',
        description: 'inhumed barney purple',
      }
    ],
    [
      {
        hex: '#fcf679',
        description: 'rubescent straw',
      },
      {
        hex: '#41fdfe',
        description: 'inventible bright cyan'
      },
      {
        hex: '#ff81c0',
        description: 'contending pink'
      }
    ],
    [
      {
        hex: '#AFA88A',
        description: 'oncogenic bland'
      },
      {
        hex: '#FD5956',
        description: 'oogamous grapefruit'
      },
      {
        hex: '#CD5908',
        description: 'unconsenting rusty orange'
      }
    ],

    [
      {
        hex: '#017b92',
        description: 'motorized ocean',
      },
      {
        hex: '#ff6bb5',
        description: 'epizootic bubblegum'
      },
      {
        hex: '#b36ff6',
        description: 'encyclopedic light urple'
      }
    ],
    [
      {
        hex: '#000000',
        description: 'contributable black',
      },
      {
        hex: '#fb5681',
        description: 'self-tapping warm pink'
      },
      {
        hex: '#95a3a6',
        description: 'freaky cool grey'
      }
    ],
    [
      {
        hex: '#ffc513',
        description: 'desiccant sunflower',
      },
      {
        hex: '#ff724c',
        description: 'fibrillar pinkish orange'
      },
      {
        hex: '#730039',
        description: 'in-service merlot'
      }
    ],
    [
      {
        hex: '#f19e8e',
        description: 'muddled blush',
      },
      {
        hex: '#f6688e',
        description: 'heterodyne rosy pink'
      },
      {
        hex: '#f8d561',
        description: 'picked light mustard'
      }
    ],
    [
      {
        hex: '#fdb147',
        description: 'hexahedral butterscotch',
      },
      {
        hex: '#3f012c',
        description: 'peridotic dark plum'
      },
      {
        hex: '#08787f',
        description: 'screaming deep aqua'
      }
    ],
    [
      {
        hex: '#070d0d',
        description: 'starving almost black',
      },
      {
        hex: '#b30049',
        description: 'blow-by-blow raspberry'
      },
      {
        hex: '#edc8fe',
        description: 'deathy light lilac'
      }
    ],
    [
      {
        hex: '#826d8c',
        description: 'bivalvular grey purple',
      },
      {
        hex: '#c88d94',
        description: 'bicuspidate greyish pink'
      },
      {
        hex: '#84597e',
        description: 'ivied dull purple'
      }
    ],
    [
      {
        hex: '#048243',
        description: 'foggiest jungle green',
      },
      {
        hex: '#32bf84',
        description: 'recluse greenish teal'
      },
      {
        hex: '#cafffb',
        description: 'merging light light blue'
      }
    ],
    [
      {
        hex: '#fdb0c0',
        description: 'snail-paced soft pink',
      },
      {
        hex: '#4a0100',
        description: 'unsealed mahogany'
      },
      {
        hex: '#fd4659',
        description: 'lousy watermelon'
      }
    ],
    [
      {
        hex: '#1b2431',
        description: 'blocky dark',
      },
      {
        hex: '#016795',
        description: 'inhaling peacock blue'
      },
      {
        hex: '#1e488f',
        description: 'ordained cobalt'
      }
    ],

    // [
    //   {
    //     hex: '#3c4142',
    //     description: 'self-winding charcoal grey',
    //   },
    //   {
    //     hex: '#fd5956',
    //     description: 'burled grapefruit'
    //   },
    //   {
    //     hex: '#fa2a55',
    //     description: 'oilier red pink'
    //   }
    // ],
    [
      {
        hex: '#fdc1c5',
        description: 'undescribable pale rose',
      },
      {
        hex: '#f6688e',
        description: 'statesmanly rosy pink'
      },
      {
        hex: '#805b87',
        description: 'hunky muted purple'
      }
    ],
    [
      {
        hex: '#dfc5fe',
        description: 'gorgeous light lavender',
      },
      {
        hex: '#5d1451',
        description: 'amalgamative grape purple'
      },
      {
        hex: '#04d9ff',
        description: 'endothermic neon blue'
      }
    ],
    [
      {
        hex: '#f19e8e',
        description: 'outward-bound slate grey',
      },
      {
        hex: '#98756f',
        description: 'unstatesmanlike reddish grey'
      },
      {
        hex: '#58656d',
        description: 'cross-sectional blush'
      }
    ],
    [
      {
        hex: '#fcc006',
        description: 'prosimian marigold',
      },
      {
        hex: '#fdab48',
        description: 'trigonous light orange'
      },
      {
        hex: '#ff7052',
        description: 'transient orange pink'
      }
    ],
    [
      {
        hex: '#ffd8b1',
        description: 'unfretted light peach',
      },
      {
        hex: '#c27f79',
        description: 'fastened brownish pink'
      },
      {
        hex: '#610023',
        description: 'confiscable burgundy'
      }
    ],
    [
      {
        hex: '#fde166',
        description: 'gutsiest sand yellow',
      },
      {
        hex: '#d46a7e',
        description: 'revitalized pinkish'
      },
      {
        hex: '#015f6b',
        description: 'paper petrol'
      }
    ],
    [
      {
        hex: '#82a67d',
        description: 'uninviting greyish green',
      },
      {
        hex: '#2dfe54',
        description: 'cultrate bright light green'
      },
      {
        hex: '#825f87',
        description: 'muttering dusty purple'
      }
    ],
    [
      {
        hex: '#f7879a',
        description: 'jagged rose pink',
      },
      {
        hex: '#c88d94',
        description: 'anaphylactic greyish pink'
      },
      {
        hex: '#fac205',
        description: 'strengthening goldenrod'
      }
    ],
    [
      {
        hex: '#214761',
        description: 'compulsive dark slate blue',
      },
      {
        hex: '#cb7723',
        description: 'oversimplified brownish orange'
      },
      {
        hex: '#bb3f3f',
        description: 'intimidatory dull red'
      }
    ],
    [
      {
        hex: '#d1768f',
        description: 'fair-weather muted pink',
      },
      {
        hex: '#610023',
        description: 'southernly burgundy'
      },
      {
        hex: '#f8481c',
        description: 'deconstructionist reddish orange'
      }
    ],

    [
      {
        hex: '#4f738e',
        description: 'vivo metallic blue',
      },
      {
        hex: '#f8481c',
        description: 'seasoned reddish orange'
      },
      {
        hex: '#fcc006',
        description: 'outremer marigold'
      }
    ],
    [
      {
        hex: '#42b395',
        description: 'flattest greeny blue',
      },
      {
        hex: '#044a05',
        description: 'favourite bottle green'
      },
      {
        hex: '#bdf8a3',
        description: 'diplomatic tea green'
      }
    ],
    [
      {
        hex: '#000000',
        description: 'chitinoid black',
      },
      {
        hex: '#fdb147',
        description: 'unsquared butterscotch'
      },
      {
        hex: '#fc86aa',
        description: 'theropod pinky'
      }
    ],
    [
      {
        hex: '#fc824a',
        description: 'biparous orangish'
      },
      {
        hex: '#b00149',
        description: 'unblissful raspberry'
      },
      {
        hex: '#0c1793',
        description: 'private royal'
      }
    ],
    [
      {
        hex: '#fafe4b',
        description: 'plantar sunflower',
      },
      {
        hex: '#fed0fc',
        description: 'requitable light salmon'
      },
      {
        hex: '#fb5581',
        description: 'otherwise bright purple'
      }
    ],
    [
      {
        hex: '#ffd1df',
        description: 'annihilated light pink',
      },
      {
        hex: '#922b05',
        description: 'blurry brown red'
      },
      {
        hex: '#fea993',
        description: 'aphyllous light salmon'
      }
    ],

    [
      {
        hex: '#acfffc',
        description: 'mangiest light cyan',
      },
      {
        hex: '#ff9a8a',
        description: 'hawk-eyed peachy pink'
      },
      {
        hex: '#155084',
        description: 'hydrothermal light navy'
      }
    ],
    [
      {
        hex: '#de7e5d',
        description: 'cardiorespiratory dark peach',
      },
      {
        hex: '#9e003a',
        description: 'infinitive cranberry'
      },
      {
        hex: '#fdfdfe',
        description: 'bubbling pale grey'
      }
    ],

    [
      {
        hex: '#6c3461',
        description: 'acidifiable grape',
      },
      {
        hex: '#94568c',
        description: 'cordless purplish'
      },
      {
        hex: '#fdb915',
        description: 'pushing orangey yellow'
      }
    ],
    [
      {
        hex: '#017371',
        description: 'geotropic dark aquamarine',
      },
      {
        hex: '#56fca2',
        description: 'stone light green blue'
      },
      {
        hex: '#0e87cc',
        description: 'ornate water blue'
      }
    ],
    [
      {
        hex: '#677a04',
        description: 'unblenching olive green',
      },
      {
        hex: '#ffe5ad',
        description: 'thousandfold pale peach'
      },
      {
        hex: '#33b864',
        description: 'appropriate cool green'
      }
    ],
    [
      {
        hex: '#ff964f',
        description: 'tidied pastel orange',
      },
      {
        hex: '#d46a7e',
        description: 'unalienable pinkish'
      },
      {
        hex: '#59656d',
        description: 'foveate slate grey'
      }
    ],
    [
      {
        hex: '',
        description: '',
      },
      {
        hex: '',
        description: ''
      },
      {
        hex: '',
        description: ''
      }
    ],
    [
      {
        hex: '',
        description: '',
      },
      {
        hex: '',
        description: ''
      },
      {
        hex: '',
        description: ''
      }
    ],
    [
      {
        hex: '',
        description: '',
      },
      {
        hex: '',
        description: ''
      },
      {
        hex: '',
        description: ''
      }
    ],
    [
      {
        hex: '',
        description: '',
      },
      {
        hex: '',
        description: ''
      },
      {
        hex: '',
        description: ''
      }
    ],
    [
      {
        hex: '',
        description: '',
      },
      {
        hex: '',
        description: ''
      },
      {
        hex: '',
        description: ''
      }
    ],
    [
      {
        hex: '',
        description: '',
      },
      {
        hex: '',
        description: ''
      },
      {
        hex: '',
        description: ''
      }
    ],
    [
      {
        hex: '',
        description: '',
      },
      {
        hex: '',
        description: ''
      },
      {
        hex: '',
        description: ''
      }
    ],
    [
      {
        hex: '',
        description: '',
      },
      {
        hex: '',
        description: ''
      },
      {
        hex: '',
        description: ''
      }
    ]
  ];
  constructor(private route: ActivatedRoute,
              private router: Router) {
    router.events.subscribe(nav => {
      if (nav instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.paletteParam = params.get('id');
    });
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
