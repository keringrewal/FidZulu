import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DvdlistComponent } from './dvdlist/dvdlist.component';
import { LaptoplistComponent } from './laptoplist/laptoplist.component';
import { HttpClientModule } from '@angular/common/http';
import { ToylistComponent } from './toylist/toylist.component';
import { BookListComponent } from './componenets/book-list/book-list.component';
import { FoodListComponent } from './componenets/food-list/food-list.component';
import { BikeListComponent } from './componenets/bike-list/bike-list.component';
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    DvdlistComponent,
    LaptoplistComponent,
    ToylistComponent,
    BookListComponent,
    FoodListComponent,
    BikeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
