import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiserviseService } from './services/apiservise.service';
import { Flower } from './types/flower.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  flowerService = inject(ApiserviseService);

  flowers: Flower[] = [];

  constructor() {
    this.flowerService.getFlowers().subscribe((val) => {
      this.flowers = val;
    });
  }
}
