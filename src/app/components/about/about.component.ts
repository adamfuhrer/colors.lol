import {AfterViewInit, Component, Inject, Renderer2} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements AfterViewInit {
  constructor(private titleService: Title,
              private renderer2: Renderer2,
              @Inject(DOCUMENT) private document) {
    this.titleService.setTitle('About | colors.lol');
  }

  ngAfterViewInit() {
    const script = this.renderer2.createElement('script');
    script.type = 'text/javascript';
    script.src = '//cdn.carbonads.com/carbon.js?serve=CE7IV23M&placement=colorslol';
    script.id = '_carbonads_js';
    this.insertElementAfter(script, this.document.querySelector('.last-element'));
  }

  insertElementAfter(newElement, targetElement) {
    const parent = targetElement.parentNode;
    if (parent.lastChild === targetElement) {
      parent.appendChild(newElement);
    } else {
      parent.insertBefore(newElement, targetElement.nextSibling);
    }
  }
}
