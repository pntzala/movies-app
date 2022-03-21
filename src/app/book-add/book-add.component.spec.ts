import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookService } from '../book.service';

import { BookAddComponent } from './book-add.component';

describe('BookAddComponent', () => {
  let component: BookAddComponent;
  let fixture: ComponentFixture<BookAddComponent>;
  let bookService: BookService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('hasError', () => {
    component.bookFormGroup.controls['controlName'].setValue('-123');
    let result = component.hasError('controlName', 'errorName');
    let error = "Error";

    expect(result).toBe(false);
    expect(component.hasError).toBe(error);
  });


  it('should not SAVE if one of the fields are invalid', () => {
    spyOn(component.bookFormGroup.controls['title'], 'hasError').and.returnValue(true);
    component.onFormSubmit();
    fixture.detectChanges();

    expect(component.addAnotherBook).not.toHaveBeenCalled();//?AUTO SWSTO
  });

  it('should call addAnotherBook function if all fields are valid', () => {
    spyOn(component.bookFormGroup.controls['title'],'markAsTouched');
    spyOn(component.bookFormGroup.controls['isbn'],'markAsTouched');
    spyOn(component.bookFormGroup.controls['title'], 'hasError').and.returnValue(false);
    spyOn(component.bookFormGroup.controls['isbn'], 'hasError').and.returnValue(false);
    spyOn(component.bookFormGroup.controls['description'], 'hasError').and.returnValue(false);
    spyOn(component.bookFormGroup.controls['subtitle'], 'hasError').and.returnValue(false);
    spyOn(component.bookFormGroup.controls['author'], 'hasError').and.returnValue(false);
    spyOn(component.bookFormGroup.controls['publisher'], 'hasError').and.returnValue(false);
    spyOn(component.bookFormGroup.controls['published'], 'hasError').and.returnValue(false);
    spyOn(component.bookFormGroup.controls['pages'], 'hasError').and.returnValue(false);
    spyOn(component.bookFormGroup.controls['isbn10'], 'hasError').and.returnValue(false);
    spyOn(component.bookFormGroup.controls['rating'], 'hasError').and.returnValue(false);
    //its a service,so we use jasmine.createSpy()
    component["bookService"].addBook = jasmine.createSpy();
    spyOn(component, 'addAnotherBook');

    component.onFormSubmit();
    fixture.detectChanges();

    expect(component.bookFormGroup.controls['title'].markAsTouched).toHaveBeenCalled();
    expect(component.bookFormGroup.controls['isbn'].markAsTouched).toHaveBeenCalled();
    expect(component["bookService"].addBook).toHaveBeenCalled();
    expect(component.addAnotherBook).toHaveBeenCalled();
  });

  it('should call addAnotherBook function if all fields are valid', () => {
    spyOn(component.bookFormGroup.controls['title'],'setValue');
    spyOn(component.bookFormGroup.controls['title'],'markAsUntouched');
    spyOn(component.bookFormGroup.controls['isbn'],'setValue');
    spyOn(component.bookFormGroup.controls['isbn'],'markAsUntouched');
    spyOn(component.bookFormGroup.controls['description'],'setValue');
    spyOn(component.bookFormGroup.controls['subtitle'],'setValue');
    spyOn(component.bookFormGroup.controls['author'],'setValue');
    spyOn(component.bookFormGroup.controls['publisher'],'setValue');
    spyOn(component.bookFormGroup.controls['published'],'setValue');
    spyOn(component.bookFormGroup.controls['pages'],'setValue');
    spyOn(component.bookFormGroup.controls['isbn10'],'setValue');
    spyOn(component.bookFormGroup.controls['rating'],'setValue');

    component.addAnotherBook();
    fixture.detectChanges();

    expect(component.bookFormGroup.controls['title'].setValue).toHaveBeenCalled();
    expect(component.bookFormGroup.controls['title'].markAsUntouched).toHaveBeenCalled();
    expect(component.bookFormGroup.controls['isbn'].setValue).toHaveBeenCalled();
    expect(component.bookFormGroup.controls['isbn'].markAsUntouched).toHaveBeenCalled();
    expect(component.bookFormGroup.controls['description'].setValue).toHaveBeenCalled();
    expect(component.bookFormGroup.controls['subtitle'].setValue).toHaveBeenCalled();
    expect(component.bookFormGroup.controls['author'].setValue).toHaveBeenCalled();
    expect(component.bookFormGroup.controls['publisher'].setValue).toHaveBeenCalled();
    expect(component.bookFormGroup.controls['published'].setValue).toHaveBeenCalled();
    expect(component.bookFormGroup.controls['pages'].setValue).toHaveBeenCalled();
    expect(component.bookFormGroup.controls['isbn10'].setValue).toHaveBeenCalled();
    expect(component.bookFormGroup.controls['rating'].setValue).toHaveBeenCalled();
  });
});
