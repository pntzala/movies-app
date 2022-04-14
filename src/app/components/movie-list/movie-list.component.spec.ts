import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieService } from 'src/app/service/movie.service';

import { MovieListComponent } from './movie-list.component';

describe('MovieListComponent', () => {
  let component: MovieListComponent;
  let fixture: ComponentFixture<MovieListComponent>;
  let movieService: MovieService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
