import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { ApiserviseService } from './services/apiservise.service';
import { Flower } from './types/flower.interface';
import { SliderComponent } from './components/slider/slider.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent, SliderComponent],
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
