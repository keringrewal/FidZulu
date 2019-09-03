import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Food } from '../models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  private url: string = '../../assets/Foodjson.json'
  
  constructor(private httpClient: HttpClient) {
  }

  getJSON() {
    return this.httpClient.get<Food[]>(this.url);
  }

}
