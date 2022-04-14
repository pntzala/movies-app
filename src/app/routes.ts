import { Routes } from '@angular/router';
import { CategoriesComponent } from './components/categories/categories.component';

import { MovieInfoDialogComponent } from './components/movie-info-dialog/movie-info-dialog.component';
import { SearchComponent } from './components/search-movies/search-movies.component';

export const routes: Routes = [
    { path:'', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: SearchComponent },
    { path: 'categories', component: CategoriesComponent },
    { path: '**', redirectTo: 'home'}
];
