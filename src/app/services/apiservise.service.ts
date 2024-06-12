import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Flower } from '../types/flower.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiserviseService {
  http = inject(HttpClient);

  getFlowers() {
    return this.http.get<Flower[]>(
      'https://e135ca7e09f43392.mokky.dev/flowers'
    );
  }

  constructor() {}
}
