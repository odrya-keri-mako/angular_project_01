import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { enableProdMode, isDevMode } from "@angular/core";

if (isDevMode()) {
  enableProdMode();
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes)
  ]
};