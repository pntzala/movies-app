import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

@Input() movies: Movie [] = [];
@Input() pageSize!: number;

@Input() userIsAuthenticated!: boolean;

  constructor() {}

  ngOnInit(): void {
  }
}
