import { Component, Input, OnInit } from '@angular/core';
import { BookService } from ".././book.service";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  providers:[BookService]
})
export class CategoryComponent implements OnInit {

  book: any;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.book = this.bookService.getBook()[0];
  }

}
