import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../movie';

@Component({
  selector: 'app-movie-item-details',
  templateUrl: './movie-item-details.component.html',
  styleUrls: ['./movie-item-details.component.scss']
})
export class MovieItemDetailsComponent implements OnInit {

 @Input() movie!: Movie;

  constructor() {}

  ngOnInit(): void {

  }

}
