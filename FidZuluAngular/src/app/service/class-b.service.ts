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

  private toyUrl = 'http://localhost:3021/classb/toys/US-NC';
  private DVDUrl = 'http://localhost:3021/classb/dvds/US-NC';
  private laptopUrl = 'http://localhost:3021/classb/books/US-NC';

  constructor(private http: HttpClient) { }

  getAllToys() :Observable<Toys[]>{
    return this.http.get<Toys[]>(this.toyUrl)
};

getAllDVD() :Observable<Dvd[]>{
  return this.http.get<Dvd[]>(this.DVDUrl)
};

getAllLaptops() :Observable<Laptops[]>{
  return this.http.get<Laptops[]>(this.laptopUrl)
};

}
