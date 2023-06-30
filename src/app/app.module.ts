import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HeaderComponent } from './comps/header/header.component';
import { StartboxComponent } from './comps/startbox/startbox.component';
import { SubheaderComponent } from './comps/subheader/subheader.component';
import { ProjectheaderComponent } from './comps/projectheader/projectheader.component';
import { ProjectsComponent } from './comps/projects/projects.component';
import { SkillsheaderComponent } from './comps/skillsheader/skillsheader.component';
import { AboutheaderComponent } from './comps/aboutheader/aboutheader.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StartboxComponent,
    SubheaderComponent,
    ProjectheaderComponent,
    ProjectsComponent,
    SkillsheaderComponent,
    AboutheaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
