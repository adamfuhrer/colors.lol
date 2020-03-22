import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Color} from '../color-palette/color-palette.component';
import {ColorFilterService} from '../../services/color-filter.service';
import * as chroma from 'chroma-js';

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
        hex: '#ed0dd9',
        description: 'tendinous fuchsia',
      },
      {
        hex: '#c1c6fc',
        description: 'isotopic light periwinkle'
      },
      {
        hex: '#be03fd',
        description: 'inspired bright purple'
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
        hex: '#475f94',
        description: 'whacking dusky blue',
      },
      {
        hex: '#fddc5c',
        description: 'loverless light gold'
      },
      {
        hex: '#fa4224',
        description: 'unremarked orangey red'
      }
    ],
    [
      {
        hex: '#343837',
        description: 'grassiest charcoal',
      },
      {
        hex: '#03719c',
        description: 'indiscernible ocean blue'
      },
      {
        hex: '#0f9b8e',
        description: 'unsusceptible blue/green'
      }
    ],
    [
      {
        hex: '#ffbacd',
        description: 'banging pastel pink',
      },
      {
        hex: '#da467d',
        description: 'extravert darkish pink'
      },
      {
        hex: '#cb0162',
        description: 'tuppenny deep pink'
      }
    ],
    [
      {
        hex: '#c6fcff',
        description: 'gibbose light sky blue',
      },
      {
        hex: '#cea2fd',
        description: 'unauspicious lilac'
      },
      {
        hex: '#9900fa',
        description: 'grumpiest vivid purple'
      }
    ],
    [
      {
        hex: '#a75e09',
        description: 'rewarding raw umber',
      },
      {
        hex: '#dbb40c',
        description: 'self-respecting gold'
      },
      {
        hex: '#d5174e',
        description: 'scrappy lipstick'
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
        hex: '#ffab0f',
        description: 'fou yellowish orange',
      },
      {
        hex: '#247afd',
        description: 'one-on-one clear blue'
      },
      {
        hex: '#fe46a5',
        description: 'tractive barbie pink'
      }
    ],
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
        hex: '#fe019a',
        description: 'immediate neon pink',
      },
      {
        hex: '#5a06ef',
        description: 'spicate blue/purple'
      },
      {
        hex: '#fcfc81',
        description: 'supplicatory yellowish tan'
      }
    ],
    [
      {
        hex: '#d8dcd6',
        description: 'ungentlemanly light grey',
      },
      {
        hex: '#3b719f',
        description: 'deadly muted blue'
      },
      {
        hex: '#8f8ce7',
        description: 'entopic perrywinkle'
      }
    ],
    [
      {
        hex: '#4984b8',
        description: 'unamusing cool blue',
      },
      {
        hex: '#dfc5fe',
        description: 'big-name light lavender'
      },
      {
        hex: '#c83cb9',
        description: 'surface-active purpley pink'
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
        hex: '#7bc8f6',
        description: 'strawy lightblue',
      },
      {
        hex: '#a7ffb5',
        description: 'consulting light seafoam green'
      },
      {
        hex: '#feb2d0',
        description: 'citrus powder pink'
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
    [
      {
        hex: '#d3494e',
        description: 'calibred faded red',
      },
      {
        hex: '#ffe5ad',
        description: 'nonbiological pale peach'
      },
      {
        hex: '#13bbaf',
        description: 'vinegary topaz'
      }
    ],
    [
      {
        hex: '#fddc5c',
        description: 'ground light gold',
      },
      {
        hex: '#fdfdfe',
        description: 'thatchless pale grey'
      },
      {
        hex: '#bdf6fe',
        description: 'replaceable pale sky blue'
      }
    ],
    [
      {
        hex: '#005249',
        description: 'unmeasured dark blue green',
      },
      {
        hex: '#ff0490',
        description: 'admissible electric pink'
      },
      {
        hex: '#ffbacd',
        description: 'unshakable pastel pink'
      }
    ],
    [
      {
        hex: '#fcb001',
        description: 'kindliest yellow orange',
      },
      {
        hex: '#6b7c85',
        description: 'prewar battleship grey'
      },
      {
        hex: '#040348',
        description: 'natural night blue'
      }
    ],
    [
      {
        hex: '#014d4e',
        description: 'unenvying dark teal',
      },
      {
        hex: '#f4320c',
        description: 'unindexed vermillion'
      },
      {
        hex: '#3f012c',
        description: 'scrupulous dark plum'
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
        hex: '#ff6163',
        description: 'smeared coral pink',
      },
      {
        hex: '#137e6d',
        description: 'midland blue green'
      },
      {
        hex: '#cffdbc',
        description: 'uncloistered very pale green'
      }
    ],
    [
      {
        hex: '#ffff7e',
        description: 'fixative banana',
      },
      {
        hex: '#8ab8fe',
        description: 'subarachnoid carolina blue'
      },
      {
        hex: '#665fd1',
        description: 'strobilaceous dark periwinkle'
      }
    ],

    [
      {
        hex: '#7e4071',
        description: 'clerkly bruise',
      },
      {
        hex: '#ff0789',
        description: 'short-winded strong pink'
      },
      {
        hex: '#2a0134',
        description: 'intent very dark purple'
      }
    ],
    [
      {
        hex: '#f5054f',
        description: 'milled pink red',
      },
      {
        hex: '#3f012c',
        description: 'gynaecoid dark plum'
      },
      {
        hex: '#efc0fe',
        description: 'unhealthy light lavendar'
      }
    ],
    [
      {
        hex: '#ffa62b',
        description: 'scorned mango',
      },
      {
        hex: '#1b2431',
        description: 'observant dark'
      },
      {
        hex: '#75b3e7',
        description: 'shut-in sky'
      }
    ],
    [
      {
        hex: '#4e0550',
        description: 'pursued plum purple',
      },
      {
        hex: '#ca6641',
        description: 'stapled terracotta'
      },
      {
        hex: '#005249',
        description: 'forward-looking dark blue green'
      }
    ],
    [
      {
        hex: '#000133',
        description: 'podgy very dark blue',
      },
      {
        hex: '#a442a0',
        description: 'zymotic ugly purple'
      },
      {
        hex: '#efc0fe',
        description: 'maltreated light lavendar'
      }
    ],
    [
      {
        hex: '#26f7fd',
        description: 'gynomonoecious bright light blue',
      },
      {
        hex: '#3d7afd',
        description: 'commeasurable lightish blue'
      },
      {
        hex: '#1f0954',
        description: 'pyelitic dark indigo'
      }
    ],
    [
      {
        hex: '#3c4142',
        description: 'honorable charcoal grey',
      },
      {
        hex: '#13bbaf',
        description: 'fundamental topaz'
      },
      {
        hex: '#edc8ff',
        description: 'prothetic light lilac'
      }
    ],
    [
      {
        hex: '#fd8d49',
        description: 'held orangeish',
      },
      {
        hex: '#fdde6c',
        description: 'psychrometric pale gold'
      },
      {
        hex: '#f43605',
        description: 'panting orangish red'
      }
    ],
    [
      {
        hex: '#fedf08',
        description: 'dietetical dandelion',
      },
      {
        hex: '#b7c9e2',
        description: 'unleased light blue grey'
      },
      {
        hex: '#5684ae',
        description: 'aponeurotic off blue'
      }
    ],

    [
      {
        hex: '#1fa774',
        description: 'labouring jade',
      },
      {
        hex: '#90e4c1',
        description: 'runcinate light teal'
      },
      {
        hex: '#ffd1df',
        description: 'pre-Columbian light pink'
      }
    ],
    [
      {
        hex: '#36013f',
        description: 'must deep purple',
      },
      {
        hex: '#8f8ce7',
        description: 'gummed perrywinkle'
      },
      {
        hex: '#017a79',
        description: 'hymenal bluegreen'
      }
    ],
    [
      {
        hex: '#b790d4',
        description: 'right-about pale purple',
      },
      {
        hex: '#7af9ab',
        description: 'merciful seafoam green'
      },
      {
        hex: '#0a481e',
        description: 'gyrational pine green'
      }
    ],
    [
      {
        hex: '#31668a',
        description: 'subtile ugly blue',
      },
      {
        hex: '#f10c45',
        description: 'palatable pinkish red'
      },
      {
        hex: '#6b7c85',
        description: 'cubic battleship grey'
      }
    ],
    [
      {
        hex: '#6c3461',
        description: 'unartificial grape',
      },
      {
        hex: '#d9544d',
        description: 'flabellate pale red'
      },
      {
        hex: '#048243',
        description: 'albuminoid jungle green'
      }
    ],

    [
      {
        hex: '#f5bf03',
        description: 'unstaid golden',
      },
      {
        hex: '#b790d4',
        description: 'ungermane pale purple'
      },
      {
        hex: '#3c4142',
        description: 'unprompted charcoal grey'
      }
    ],
    [
      {
        hex: '#d99b82',
        description: 'frank pinkish tan',
      },
      {
        hex: '#980002',
        description: 'unaware blood red'
      },
      {
        hex: '#d90166',
        description: 'stripier dark hot pink'
      }
    ],
    [
      {
        hex: '#c3fbf4',
        description: 'annihilating duck egg blue',
      },
      {
        hex: '#5684ae',
        description: 'abstemious off blue'
      },
      {
        hex: '#000000',
        description: 'divorced black'
      }
    ],
    [
      {
        hex: '#fc824a',
        description: 'unionized orangish',
      },
      {
        hex: '#c65102',
        description: 'half-done dark orange'
      },
      {
        hex: '#3c0008',
        description: 'bolted dark maroon'
      }
    ],
    [
      {
        hex: '#4b006e',
        description: 'ransacked royal purple',
      },
      {
        hex: '#8ab8fe',
        description: 'unreproached carolina blue'
      },
      {
        hex: '#000133',
        description: 'clean-cut very dark blue'
      }
    ],
    [
      {
        hex: '#0cb577',
        description: 'deathly green teal',
      },
      {
        hex: '#014d4e',
        description: 'moraceous dark teal'
      },
      {
        hex: '#002d04',
        description: 'multiscreen dark forest green'
      }
    ],
    [
      {
        hex: '#fdc1c5',
        description: 'excommunicate pale rose',
      },
      {
        hex: '#ffda03',
        description: 'undescried sunflower yellow'
      },
      {
        hex: '#85a3b2',
        description: 'frondescent bluegrey'
      }
    ],
    [
      {
        hex: '#9dff00',
        description: 'mobocratic bright yellow green',
      },
      {
        hex: '#fe86a4',
        description: 'limp rosa'
      },
      {
        hex: '#fe019a',
        description: 'unprojected neon pink'
      }
    ],
    [
      {
        hex: '#ff9408',
        description: 'uncited tangerine',
      },
      {
        hex: '#017374',
        description: 'revokable deep turquoise'
      },
      {
        hex: '#014d4e',
        description: 'lubric dark teal'
      }
    ],
    [
      {
        hex: '#ff6163',
        description: 'unteachable coral pink',
      },
      {
        hex: '#750851',
        description: 'foolhardier velvet'
      },
      {
        hex: '#920a4e',
        description: 'nervous mulberry'
      }
    ],
    [
      {
        hex: '#f6688e',
        description: 'bastardized rosy pink',
      },
      {
        hex: '#cb416b',
        description: 'ocular dark pink'
      },
      {
        hex: '#ffb19a',
        description: 'sulkies pale salmon'
      }
    ],
    [
      {
        hex: '#b9cc81',
        description: 'cantharidian pale olive',
      },
      {
        hex: '#feffca',
        description: 'well-thought-of ecru'
      },
      {
        hex: '#748500',
        description: 'pizzicato swamp green'
      }
    ],
    [
      {
        hex: '#d6b4fc',
        description: 'lily-white light violet',
      },
      {
        hex: '#5d21d0',
        description: 'propagandistic purple/blue'
      },
      {
        hex: '#01f9c6',
        description: 'mutant bright teal'
      }
    ],
    [
      {
        hex: '#ffffe4',
        description: 'undefaced off white',
      },
      {
        hex: '#b17261',
        description: 'self-addressed pinkish brown'
      },
      {
        hex: '#8f1402',
        description: 'accosted brick red'
      }
    ],
    [
      {
        hex: '#ffc512',
        description: 'silvern sunflower',
      },
      {
        hex: '#cfaf7b',
        description: 'horn-mad fawn'
      },
      {
        hex: '#0485d1',
        description: 'philosophical cerulean'
      }
    ]
    // [
    //   {
    //     hex: '',
    //     description: '',
    //   },
    //   {
    //     hex: '',
    //     description: ''
    //   },
    //   {
    //     hex: '',
    //     description: ''
    //   }
    // ],
  ];
  unfilteredPalettes = [...this.palettes];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private colorFilterService: ColorFilterService) {
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

    this.colorFilterService.filterColor.subscribe(color => {
      if (color) {
        this.palettes = this.unfilteredPalettes;
        // Compare the filter color to the colours of each palette. If there is a similar match, show the color in list of filtered results
        this.palettes = this.palettes.filter(palette => {
          return palette.some(c => chroma.deltaE(c.hex, color) < 20) ||
            palette.some(c => chroma.deltaE(c.hex, chroma(color).desaturate(1.4)) < 20);
        });
      } else {
        this.palettes = this.unfilteredPalettes;
      }
    });
    console.log(this.palettes.length);
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
