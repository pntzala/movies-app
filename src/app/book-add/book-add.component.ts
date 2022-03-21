import { Component, Input, OnInit } from '@angular/core';
import { IBook } from '../book';
import { BookService } from '../book.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.scss'],
  providers:[BookService]
})
export class BookAddComponent implements OnInit {

  bookToAdd: IBook = {
    isbn: '',
    title: '',
    subtitle: '',
    author: '',
    published: '',
    publisher: '',
    pages: 0,
    description: '',
    options: '',
    rating: 0,
    isbn10: '',
    category: ''
  };

  bookFormGroup: FormGroup;
  category = '1';

  constructor(private bookService: BookService) {

    //Validating form inputs
    this.bookFormGroup = new FormGroup({
      'title': new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9@”#&\*!]{10,120}')]),
      'description': new FormControl('', [Validators.pattern('^[A-Z].{0,512}')]),
      'subtitle': new FormControl('', [Validators.pattern('^[a-zA-Z0-9@”#&\*!]{10,120}')]),
      'author': new FormControl('', [Validators.pattern('.{5,60}')]),
      'publisher': new FormControl('', [Validators.pattern('.{5,60}')]),
      'published': new FormControl('', [Validators.pattern('^[0-9]{4,4}')]),
      'pages': new FormControl('', [Validators.pattern('^[0-9]{1,4}')]),
      'isbn10': new FormControl('', [Validators.pattern('^[0-9]{10,10}')]),
      'isbn': new FormControl('', [Validators.required, Validators.pattern('^[0-9]{13,13}')]),
      'rating': new FormControl('', [Validators.pattern('^[1-5]{1,1}')]),
      'options': new FormControl(''),
      'category': new FormControl(''),
    });
  }

  ngOnInit(): void {
  }

  hasError = (controlName: string, errorName: string) => {
    return this.bookFormGroup.controls[controlName].hasError(errorName);
  }

  onFormSubmit() {
    //required fields , show the error
    this.bookFormGroup.controls['title'].markAsTouched();
    this.bookFormGroup.controls['isbn'].markAsTouched();

    // checks if fulfilled all the required validations
    if ( ( this.bookFormGroup.controls['title'].hasError('required') ||
           this.bookFormGroup.controls['title'].hasError('pattern') )  ||
         ( this.bookFormGroup.controls['isbn'].hasError('required') ||
           this.bookFormGroup.controls['isbn'].hasError('pattern') )   ||
        this.bookFormGroup.controls['description'].hasError('pattern') ||
        this.bookFormGroup.controls['subtitle'].hasError('pattern')    ||
        this.bookFormGroup.controls['author'].hasError('pattern')      ||
        this.bookFormGroup.controls['publisher'].hasError('pattern')   ||
        this.bookFormGroup.controls['published'].hasError('pattern')   ||
        this.bookFormGroup.controls['pages'].hasError('pattern')       ||
        this.bookFormGroup.controls['isbn10'].hasError('pattern')      ||
        this.bookFormGroup.controls['rating'].hasError('pattern')       )
    {
           return;
    }

    this.bookToAdd = {
      isbn: this.bookFormGroup.controls['isbn'].value,
      title: this.bookFormGroup.controls['title'].value,
      subtitle: this.bookFormGroup.controls['subtitle'].value,
      author: this.bookFormGroup.controls['author'].value,
      published: this.bookFormGroup.controls['published'].value,
      publisher: this.bookFormGroup.controls['publisher'].value,
      pages: this.bookFormGroup.controls['pages'].value,
      description: this.bookFormGroup.controls['description'].value,
      options: this.bookFormGroup.controls['options'].value,
      rating: this.bookFormGroup.controls['rating'].value,
      isbn10: this.bookFormGroup.controls['isbn10'].value,
      category: this.bookFormGroup.controls['category'].value
    };

    //call the bookService
    this.bookService.addBook(this.bookToAdd);

    //console.log(this.bookService.books);
    alert("Your book with title:" + this.bookToAdd.title + "has been added");

    //Clear All form fields after save
    this.addAnotherBook();
  }

  //Clear All form fields
  addAnotherBook() {
    this.bookFormGroup.controls['isbn'].setValue("");
    this.bookFormGroup.controls['isbn'].markAsUntouched();
    this.bookFormGroup.controls['title'].setValue("");
    this.bookFormGroup.controls['title'].markAsUntouched();
    this.bookFormGroup.controls['description'].setValue("");
    this.bookFormGroup.controls['subtitle'].setValue("");
    this.bookFormGroup.controls['author'].setValue("");
    this.bookFormGroup.controls['publisher'].setValue("");
    this.bookFormGroup.controls['published'].setValue("");
    this.bookFormGroup.controls['pages'].setValue(undefined);
    this.bookFormGroup.controls['isbn10'].setValue("");
    this.bookFormGroup.controls['rating'].setValue(undefined);
    this.bookFormGroup.controls['options'].setValue("");
    this.bookFormGroup.controls['category'].setValue("");
  }

}
