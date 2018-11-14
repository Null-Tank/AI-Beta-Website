import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DownloadComponent } from './download/download.component';
import { DevelopersComponent } from './developers/developers.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DownloadComponent,
    DevelopersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
