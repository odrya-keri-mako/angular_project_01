import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { Page1Component } from './views/page1/page1.component';
import { Page2Component } from './views/page2/page2.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'page1', component: Page1Component },
  { path: 'page2', component: Page2Component },
  { path: '**', redirectTo: '' }
];