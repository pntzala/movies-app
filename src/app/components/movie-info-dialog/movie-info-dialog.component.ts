import { Component, Inject, Input, OnInit } from '@angular/core';
import { MovieService } from "../../service/movie.service";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../movie-item/movie-item.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-movie-info-dialog',
  templateUrl: './movie-info-dialog.component.html',
  styleUrls: ['./movie-info-dialog.component.scss'],
  providers: [MovieService]
})
export class MovieInfoDialogComponent {

  movieFormGroup!: FormGroup;
  rate!: number;

  constructor(public dialogRef: MatDialogRef<MovieInfoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private movieService: MovieService) {

    //Validating form inputs
    //used as an example of FormGroup functionallity
    this.movieFormGroup = new FormGroup({
      'rating': new FormControl('', [Validators.required, Validators.pattern('^[1-5]{1,1}')]),
    });

  }

  ngOnInit(): void {
   // console.log(this.data);
  }

  postMovieRating(id: number, rate:number) {
    this.movieService.postMovieRating(id, rate).subscribe((res: any) => {
      //console.log(rate);
    });
  }

  onPostRateSubmit(id: number) {
    // checks if fullfilled all the required validations
    if ( ( this.movieFormGroup.controls['rating'].hasError('required') ||
           this.movieFormGroup.controls['rating'].hasError('pattern') ) )
    {
      return;
    }

    //call the postMovieRating
    this.postMovieRating(id, this.movieFormGroup.controls['rating'].value);
    alert("You rated " + this.data.movie.title + " with " + this.movieFormGroup.value['rating']);

    //Clear form fields
    this.movieFormGroup.reset();
  }


  hasError = (controlName: string, errorName: string) => {
    return this.movieFormGroup.controls[controlName].hasError(errorName);
  }

}
