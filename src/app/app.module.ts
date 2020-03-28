import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { Platform } from '@angular/cdk/platform';
import { ShareModule } from '@ngx-share/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AboutComponent } from './components/about/about.component';
import { ColorPaletteComponent } from './components/color-palette/color-palette.component';
import { ColorFilterService } from './services/color-filter.service';
import { FadeInDirective } from './directives/fade-in.directive';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    HomepageComponent,
    AboutComponent,
    ColorPaletteComponent,
    FadeInDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ShareModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [
    ColorFilterService,
    Platform
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
