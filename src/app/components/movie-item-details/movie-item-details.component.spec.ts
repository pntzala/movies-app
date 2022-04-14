import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieItemDetailsComponent } from './movie-item-details.component';

describe('MovieItemDetailsComponent', () => {
  let component: MovieItemDetailsComponent;
  let fixture: ComponentFixture<MovieItemDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieItemDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
