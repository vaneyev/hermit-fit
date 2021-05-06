import {Component} from '@angular/core';
import {MovementService} from './movement.service';
import {NzTreeNodeOptions} from 'ng-zorro-antd/tree';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Hermit Fit';
  private movementService: MovementService;
  movementsTree: NzTreeNodeOptions[] = [];

  constructor(movementService: MovementService) {
    this.movementService = movementService;
    this.movementsTree = this.getMovementsTree();
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
