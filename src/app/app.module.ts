import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './comps/header/header.component';
import { StartboxComponent } from './comps/startbox/startbox.component';
import { SubheaderComponent } from './comps/subheader/subheader.component';
import { ProjectheaderComponent } from './comps/projectheader/projectheader.component';
import { SingleProjectComponent } from './comps/single-project/single-project.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, StartboxComponent, SubheaderComponent, ProjectheaderComponent, SingleProjectComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
