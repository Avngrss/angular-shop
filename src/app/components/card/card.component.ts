import { Flower } from './../../types/flower.interface';
import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() flower?: Flower;
}
