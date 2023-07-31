import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HeaderComponent } from './comps/header/header.component';
import { StartboxComponent } from './comps/startbox/startbox.component';
import { SubheaderComponent } from './comps/subheader/subheader.component';
import { ProjectsComponent } from './comps/projects/projects.component';
import { CarouselComponent } from './comps/carousel/carousel.component';
import { NavbuttonComponent } from './comps/navbutton/navbutton.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StartboxComponent,
    SubheaderComponent,
    ProjectsComponent,
    CarouselComponent,
    NavbuttonComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
