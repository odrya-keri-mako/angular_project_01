import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent { 
  currentPage: string = 'home';
  constructor() {
    console.log('Home controller...');
  }
}