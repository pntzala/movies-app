import { EventEmitter, Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError, map, retry } from 'rxjs/operators';

import { Movie } from "../movie";

@Injectable()

export class MovieService {
  baseUrl: string;
  apiKey: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://api.themoviedb.org/3/';
    this.apiKey = '85204a8cc33baf447559fb6d51b18313';
  }

  searchMovies(searchStr: string, page: number){
    return this.http.get(`${this.baseUrl}search/movie?api_key=${this.apiKey}&page=${page}&query=${searchStr}`
    )
    .pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(async (e) => this.handleError(e)) // then handle the error
    );
  }

  getTopRatedMovies(page: number){
    return this.http.get(`${this.baseUrl}movie/top_rated?api_key=${this.apiKey}&page=${page}`
    )
    .pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(async (e) => this.handleError(e)) // then handle the error
    );
  }

  // getGenres():{
  //   return this.http.get(`${this.baseUrl}genre/movie/list?api_key=${this.apiKey}&language=${this.language}`);
  // }

  getMovie(id: number){
    return this.http.get(`${this.baseUrl}movie/${id}?api_key=${this.apiKey}`);
  }

  postMovieRating(movieId:number, rating:number) {
    const userData: {
      _token: string;
      _tokenExpirationDate: string;
    } = JSON.parse(localStorage.getItem('userData') || '{}');

    return this.http.post(`${this.baseUrl}movie/${movieId}/rating?api_key=${this.apiKey}&guest_session_id=${userData._token}`, {
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        "value": rating
      })
    })
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return new Error(
      'Something bad happened; please try again later.');
  };

}
