import { Component } from '@angular/core';

@Component({
  selector: 'app-page1',
  imports: [],
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.css'
})
export class Page1Component { 
  currentPage = 'page1';
  constructor() {
    console.log('Page1 controller...');
  }
}
