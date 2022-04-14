import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../movie';
import { MatDialog } from '@angular/material/dialog';
import { MovieInfoDialogComponent } from '../movie-info-dialog/movie-info-dialog.component';
import { Router, RouterLink } from '@angular/router';
import { MovieService } from 'src/app/service/movie.service';

export interface DialogData {
  movie: Movie ;
  userIsAuthenticated: boolean;
}

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss'],
  providers:[MovieService]
})
export class MovieItemComponent implements OnInit {

 @Input() movie! : Movie;
 @Input() large!: boolean;
 @Input() userIsAuthenticated!: boolean;

 id!: number;

  constructor(public dialog: MatDialog, private router: Router, private movieService: MovieService) {
  }

  ngOnInit(): void { }

  openDialogMovie(id: number): void {
    this.movieService.getMovie(id).subscribe((res: any) => {

      this.dialog.open(MovieInfoDialogComponent, {
        height: '821px',
        width: '1000px',
        data: { movie: res, userIsAuthenticated: this.userIsAuthenticated},
        backdropClass: 'backdropBackground'
      })

      this.dialog._getAfterAllClosed().subscribe((result: any) => {
        //console.log(`Dialog result: ${result}`);
        this.router.navigateByUrl('/');
      });
    });
  }

}
