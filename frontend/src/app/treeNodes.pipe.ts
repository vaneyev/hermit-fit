import {Pipe, PipeTransform} from '@angular/core';
import {MovementTypes} from './movement.service';
import {NzTreeNodeOptions} from 'ng-zorro-antd/tree';

@Pipe({
  name: 'treeNodes'
})
export class TreeNodesPipe implements PipeTransform {

  transform(value: MovementTypes, ...args: unknown[]): Array<NzTreeNodeOptions> {
    const result: Array<NzTreeNodeOptions> = new Array<NzTreeNodeOptions>();
    value.forEach((type) => {
      const node = {
          title: type.title,
          key: type.order.toString(),
          selectable: false,
          children: []
        };
      result.push(node);
      type.steps.forEach((level) => {
        node.children.push({
            title: level.title,
            key: `${node.key}-${level.order}`,
            isLeaf: true,
          }
        );
      });
    });
    return result;
  }

}
