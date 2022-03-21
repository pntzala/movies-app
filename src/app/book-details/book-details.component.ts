import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

 @Input() book: any;

  constructor() {}

  ngOnInit(): void {}

}
