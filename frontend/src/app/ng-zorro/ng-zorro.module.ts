import { NgModule } from '@angular/core';
import {NzTreeSelectModule} from 'ng-zorro-antd/tree-select';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzTableModule} from 'ng-zorro-antd/table';

@NgModule({
  exports: [
    NzTreeSelectModule,
    NzLayoutModule,
    NzTableModule
  ]
})
export class NgZorroModule { }
