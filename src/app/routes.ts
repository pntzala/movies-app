import { Routes } from '@angular/router';

import { CategoryComponent } from './category/category.component';
import { SearchComponent } from './search/search.component';
import { BookAddComponent } from './book-add/book-add.component';

export const routes: Routes = [
    { path:'', redirectTo: '/category', pathMatch: 'full' },
    { path: 'category', component: CategoryComponent },
    { path: 'book/add', component: BookAddComponent },
    { path: 'search', component: SearchComponent }
];
