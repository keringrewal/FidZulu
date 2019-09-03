import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { FoodListComponent } from './componenets/food-list/food-list.component';
import { BikeListComponent } from './componenets/bike-list/bike-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    FoodListComponent,
    BikeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
