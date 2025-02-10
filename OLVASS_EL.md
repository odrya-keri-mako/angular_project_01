# Angular 

### Terminálban futtasd az alábbi parancsot:
```
ng new project_name --routing
cd project_name
```

### Komponensek létrehozása:
```
ng generate component components/header
ng generate component components/footer
ng generate component views/home
ng generate component views/page1
ng generate component views/page2
```

### Útvonalak beállítása (src/app/app.routes.ts):
```
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
```

### Alkalmazás beállításai (src/app/app.config.ts):
```
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes)
  ]
};
```

### Alkalmazás komponensei (src/app/app.component.ts):
```
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent
  ]
})
export class AppComponent { }
```

### Az alkalmazás fő szerkezete (src/app/app.component.html):
```
<div class="page-container position-relative
						d-flex flex-column vh-100 vw-100
						overflow-x-hidden overflow-y-auto">
  <app-header class="sticky-top"></app-header>
  <main class="position-relative flex-fill">
    <router-outlet></router-outlet>
  </main>
  <app-footer></app-footer>
</div>
```


### Bootstrap installálása:
ng add @ng-bootstrap/ng-bootstrap


### Bootstrap hozzáadása (angular.json):
```
"projects": {
  "project_name": {
    "architect": {
      "build": {
        "options": {
          "styles": [
            "node_modules/bootstrap/dist/css/bootstrap.min.css",
            "src/styles.css"
          ],
          "scripts": [
            "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
          ]
        }
      }
      "serve": {
        "configurations": {
          "development": {
            "buildTarget": "project_name:build:development",
            "hmr": false
          }
        }
      }
    }
  }
}
```

### Teszt fájlok generálása (name.component.spec.ts):
```
ng generate component home --skip-tests
ng generate component page1 --skip-tests

ng test
```