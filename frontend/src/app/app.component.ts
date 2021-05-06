import {Component, OnInit} from '@angular/core';
import {Exercise, Movement, MovementService, WorkoutDay} from './movement.service';
import {NzTreeNodeOptions} from 'ng-zorro-antd/tree';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Hermit Fit';
  private movementService: MovementService;
  movementsTree: NzTreeNodeOptions[] = [];
  exercises: Exercise[] = [];

  constructor(movementService: MovementService) {
    this.movementService = movementService;
  }

  ngOnInit(): void {
    this.movementsTree = this.getMovementsTree();
    this.exercises = this.getExercises();
  }

  getMovementsTree(): NzTreeNodeOptions[] {
    return this.movementService.getMovementsTypes()
      .map<NzTreeNodeOptions>((value) => {
        return {
          title: value.title,
          key: value.key,
          selectable: false,
          children: this.movementService.getMovements(value.key)
            .map<NzTreeNodeOptions>(child => {
              return {
                title: child.title,
                key: child.key,
                isLeaf: true
              };
            })
        };
      });
  }

  getMovement(key: string): Movement {
    return this.movementService.getMovement(key);
  }

  getDate(id: string): WorkoutDay {
    return this.movementService.getDate(id);
  }

  getExercises(): Exercise[] {
    return this.movementService.getExercises();
  }
}
