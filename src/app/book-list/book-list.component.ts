import { Component, Input, OnInit } from '@angular/core';
import { IBook } from '.././book';
import { BookService } from ".././book.service";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
  providers:[BookService]
})
export class BookListComponent implements OnInit {

books: IBook [] = [];
@Input() max!: number;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.books = this.bookService.getBook();
  }

}
