import { Component, OnInit } from '@angular/core';
import { BookService } from ".././book.service";
import { IBook } from '../book';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers:[BookService]
})
export class SearchComponent implements OnInit {

  books: IBook [] = [];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.books = this.bookService.getBook();
  }

}
