import {Component} from '@angular/core';
import {MovementService} from './movement.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Hermit Fit';
  movementService: MovementService;

  constructor(movementService: MovementService) {
    this.movementService = movementService;
  }
}
