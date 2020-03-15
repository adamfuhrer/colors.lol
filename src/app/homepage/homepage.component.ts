import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  palettes = [
    [
      {
        hex: '#000133',
        description: 'very dark blue',
        adjective: 'piscine'
      },
      {
        hex: '#FC86AA',
        description: 'pinky',
        adjective: 'photic'
      },
      {
        hex: '#d8dcd6',
        description: 'light grey',
        adjective: 'work-shy'
      }
    ],
    [
      {
        hex: '#99F764',
        description: 'light grass green',
        adjective: 'no-nonsense'
      },
      {
        hex: '#7A002B',
        description: 'bordeaux',
        adjective: 'motorable'
      },
      {
        hex: '#A00398',
        description: 'barney purple',
        adjective: 'inhumed'
      }
    ],
    [
      {
        hex: '#AFA88A',
        description: 'bland',
        adjective: 'oncogenic'
      },
      {
        hex: '#FD5956',
        description: 'grapefruit',
        adjective: 'oogamous'
      },
      {
        hex: '#CD5908',
        description: 'rusty orange',
        adjective: 'unconsenting'
      }
    ],
    [
      {
        hex: '#ff81c0',
        description: 'pink',
        adjective: 'comatose'
      },
      {
        hex: '#983fb2',
        description: 'purply',
        adjective: 'prettiest'
      },
      {
        hex: '#947e94',
        description: 'purpley grey',
        adjective: 'derogative'
      }
    ]
  ];

  ngOnInit() {
  }
}
