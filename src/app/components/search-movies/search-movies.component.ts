import { Component, OnInit } from '@angular/core';
import { Movie } from '../../movie';
import { GuestAuthService } from 'src/app/service/guest_auth.service';
import { User } from 'src/app/user.model';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.scss'],
  providers:[MovieService, GuestAuthService]
})
export class SearchComponent implements OnInit {
  movies: Movie [] = [];
  totalResults: any;
  total_results: any;
  topPage: number = 1;
  loader: boolean = true;
  searchStr!: string;
  pageSize: number = 20;
  pageIndex!: number;
  search: boolean = false;
  searchPage: number = 1;
  userIsAuthenticated: boolean = false;
  loadedUser: User | undefined;

  constructor(private movieService: MovieService, private guestAuthService: GuestAuthService) { }

  ngOnInit(): void {
    this.guestAuthService.autoAuth();

    this.guestAuthService.user.subscribe(user =>{
      //console.log(user);
      if(user?.token){
        this.userIsAuthenticated = true;
      }else {
        this.userIsAuthenticated = false;
      }
    });

    this.getTopRatedMovies(this.topPage);
  }

  getTopRatedMovies(page: number) {
    this.movieService.getTopRatedMovies(page).subscribe((res: any) => {
      this.setResults(res);
      this.topPage = res.page;
      this.search = false;
    });
  }

  //get guest access authorization
  onGetGuestAuth() {
    this.guestAuthService.getGuestAuth().subscribe((res: any) => {
      this.userIsAuthenticated = true;
    });
  }

  searchMovies(page: number) {
    this.movieService.searchMovies(this.searchStr, page).subscribe((res: any) => {
      this.setResults(res);
      this.searchPage = res.page;
      this.search = true;
    });
  }

  private setResults(res: any){
    this.movies = res.results;
    this.totalResults = res.total_results;
    this.loader = false;
  }

  changePage(event: any) {
    this.loader = true;
    this.pageIndex = event.pageIndex;

    if (!this.search){
      return this.getTopRatedMovies(this.topPage + 1);
    }
    return this.searchMovies(this.searchPage + 1);
  }

}
