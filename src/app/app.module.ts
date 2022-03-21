import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AngularMaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CategoryComponent } from './category/category.component';
import { BookItemComponent } from './book-item/book-item.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookAddComponent } from './book-add/book-add.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { SearchComponent } from './search/search.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { BookListComponent } from './book-list/book-list.component';
import { NgxStarRatingModule } from 'ngx-star-rating';
import {CustomDatePipe} from './custom.datepipe';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CategoryComponent,
    BookItemComponent,
    BookDetailsComponent,
    BookAddComponent,
    ImageUploadComponent,
    SearchComponent,
    SearchBarComponent,
    BookListComponent,
    CustomDatePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    NgxStarRatingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers:  [
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
