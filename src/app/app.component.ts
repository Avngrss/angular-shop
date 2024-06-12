import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiserviseService } from './services/apiservise.service';
import { Flower } from './types/flower.interface';
import { CardComponent } from './components/card/card.component';
import { SliderComponent } from './components/slider/slider.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    RouterOutlet,
    CardComponent,
    SliderComponent,
    HeaderComponent,
    FooterComponent,
  ],
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
