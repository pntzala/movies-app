import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AngularMaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MovieInfoDialogComponent } from './components/movie-info-dialog/movie-info-dialog.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { MovieItemDetailsComponent } from './components/movie-item-details/movie-item-details.component';
import { SearchComponent } from './components/search-movies/search-movies.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { PipeModule } from './pipe/pipe.module';
import { HttpClientModule } from '@angular/common/http';
import { SkeletonModule } from './shared/skeleton/skeleton.module';
import { CategoriesComponent } from './components/categories/categories.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MovieInfoDialogComponent,
    MovieItemComponent,
    MovieItemDetailsComponent,
    SearchComponent,
    CategoriesComponent,
    MovieListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    PipeModule,
    SkeletonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers:  [],
  bootstrap: [AppComponent]
})
export class AppModule { }
