# Terminálban futtasd az alábbi parancsot:
```
ng new project_name --routing
cd project_name
```

# Komponensek létrehozása:

```
ng generate component components/header
ng generate component components/footer
ng generate component views/home
ng generate component views/page1
ng generate component views/page2

```

# Útvonalak beállítása (src/app/app.routes.ts):
```
import { Route } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { Page1Component } from './views/page1/page1.component';
import { Page2Component } from './views/page2/page2.component';

export const routes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'page1', component: Page1Component },
  { path: 'page2', component: Page2Component },
  { path: '**', redirectTo: '' }
];
```

# Alkalmazás beállításai (src/app/app.config.ts):
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

# Az alkalmazás fő szerkezete (src/app/app.component.html):
```
<div class="page-container position-relative 
            d-flex flex-column vh-100 vw-100 
            overflow-x-hidden overflow-y-auto">
  <app-header></app-header>
  <main class="position-relative flex-fill">
    <router-outlet></router-outlet>
  </main>
  <app-footer></app-footer>
</div>
```

# Bootstrap hozzáadása (angular.json):
```
ng add @ng-bootstrap/ng-bootstrap

"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "src/styles.css"
],
"scripts": [
  "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
]
```


# Teszt fájlok generálása ():
```
ng generate component home --skip-tests
```