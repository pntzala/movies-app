import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {

 //@Inputs from parent component book-list
 @Input() title!: string;
 @Input() author!: string;
 @Input() large!: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

}
