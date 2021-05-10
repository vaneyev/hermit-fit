import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NzTreeNodeOptions} from 'ng-zorro-antd/tree';
import {Exercise, MovementService} from '../movement.service';

@Component({
  selector: 'app-exercise-create-or-update-modal',
  templateUrl: './exercise-create-or-update-modal.component.html',
  styleUrls: ['./exercise-create-or-update-modal.component.css']
})
export class ExerciseCreateOrUpdateModalComponent implements OnInit {
  @Input() visible = false;

  @Input() exercise: Exercise;

  @Output() exerciseChange = new EventEmitter<Exercise>();

  @Output() ok: EventEmitter<any> = new EventEmitter<any>();

  @Output() cancel: EventEmitter<any> = new EventEmitter<any>();

  private movementService: MovementService;

  movementsTree: NzTreeNodeOptions[] = [];

  constructor(movementService: MovementService) {
    this.movementService = movementService;
  }

  ngOnInit(): void {
    this.movementsTree = this.getMovementsTree();
  }

  onPressOk(): void {
    this.ok.emit();
  }

  onPressCancel(): void {
    this.cancel.emit();
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

}
