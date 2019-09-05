import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dvd } from '../models/dvd';
import { Laptops } from '../models/laptops';
import { Toys } from '../models/toys';

@Injectable({
  providedIn: 'root'
})
export class ClassBService {

  private toyUrl = 'http://'+window.location.hostname +':3021'+'/classb/toys/';
  private DVDUrl = 'http://'+window.location.hostname +':3022'+'/classb/dvds/';
  private laptopUrl = 'http://'+window.location.hostname +':3022'+'/classb/laptops/';

  constructor(private http: HttpClient) { }


  getAllToys(region: string) :Observable<Toys[]>{
    return this.http.get<Toys[]>(this.toyUrl + region);
};

getAllDVD(region: string) :Observable<Dvd[]>{
  return this.http.get<Dvd[]>(this.DVDUrl + region);
};

getAllLaptops(region: string) :Observable<Laptops[]>{
  return this.http.get<Laptops[]>(this.laptopUrl + region);
};

}
