import { Component } from '@angular/core';

@Component({
  selector: 'app-page2',
  imports: [],
  templateUrl: './page2.component.html',
  styleUrl: './page2.component.css'
})
export class Page2Component { 
  currentPage = 'page2';
  constructor() {
    console.log('Page2 controller...');
  }
}
