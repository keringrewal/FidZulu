import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DvdlistComponent } from './dvdlist/dvdlist.component';
import { LaptoplistComponent } from './laptoplist/laptoplist.component';
import { HttpClientModule } from '@angular/common/http';
import { ToylistComponent } from './toylist/toylist.component';

@NgModule({
  declarations: [
    AppComponent,
    DvdlistComponent,
    LaptoplistComponent,
    ToylistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
