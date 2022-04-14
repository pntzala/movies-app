import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieInfoDialogComponent } from './movie-info-dialog.component';

describe('MovieInfoComponent', () => {
  let component: MovieInfoDialogComponent;
  let fixture: ComponentFixture<MovieInfoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieInfoDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieInfoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('hasError', () => {
    component.movieFormGroup.controls['controlName'].setValue('123');
    let result = component.hasError('controlName', 'errorName');
    let error = "Error";

    expect(result).toBe(false);
    expect(component.hasError).toBe(error);
  });

  it('should not SAVE if one of the fields are invalid', () => {
    spyOn(component.movieFormGroup.controls['rating'], 'hasError').and.returnValue(true);
    component.onPostRateSubmit(2);
    fixture.detectChanges();

    expect(component.postMovieRating).not.toHaveBeenCalled();
  });

  it('should call clearFormBook function if all fields are valid', () => {
    spyOn(component.movieFormGroup.controls['rating'], 'hasError').and.returnValue(false);
    spyOn(component, 'postMovieRating');

    component.onPostRateSubmit(2);
    fixture.detectChanges();

    expect(component.postMovieRating).toHaveBeenCalled();
  });

});
