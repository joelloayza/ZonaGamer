import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rate-starts',
  templateUrl: './rate-starts.component.html',
  styleUrls: ['./rate-starts.component.css']
})
export class RateStartsComponent {
  @Input() rating: number = 0;

  get stars(): number[] {
    return Array.from({ length: this.rating }, (_, index) => index + 1);
  }
}
