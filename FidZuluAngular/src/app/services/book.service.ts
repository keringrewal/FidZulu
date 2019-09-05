import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/books';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private url: string = 'http://'+window.location.hostname +':3022'+'/classb/books/US-NC'; 

  constructor(private httpClient: HttpClient) {  }

  public getBooks(): Observable<any> {
        return this.httpClient.get<Book[]>(this.url);
    } 
}
