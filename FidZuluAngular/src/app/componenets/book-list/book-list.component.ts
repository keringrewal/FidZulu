import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/models/books';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  constructor(private bookService: BookService) { }

  private books: Book[];

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    this.bookService.getBooks()
            .subscribe(data => {
                this.books = data;
                console.log(this.books);

            });
  }

}
