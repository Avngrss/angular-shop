import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
  ],
};
const firebaseConfig = {
  apiKey: 'AIzaSyCf9PMjercuhwXM3eatGsk9YnL_IlJGNI8',
  authDomain: 'angular-shop-831f1.firebaseapp.com',
  projectId: 'angular-shop-831f1',
  storageBucket: 'angular-shop-831f1.appspot.com',
  messagingSenderId: '125261700241',
  appId: '1:125261700241:web:3030cf47152907f9783330',
};
