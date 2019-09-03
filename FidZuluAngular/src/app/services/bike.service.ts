import { Injectable } from '@angular/core';
import { Bikes } from '../models/bikes';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BikeService {
  
  private url: string = '../../assets/Bikejson.json'
  
  constructor(private httpClient: HttpClient) {
  }

  getJSON() {
    return this.httpClient.get<Bikes[]>(this.url);
  }

}
