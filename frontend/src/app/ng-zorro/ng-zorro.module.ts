import { NgModule } from '@angular/core';
import {NzTreeSelectModule} from 'ng-zorro-antd/tree-select';
import {NzLayoutModule} from 'ng-zorro-antd/layout';

@NgModule({
  exports: [
    NzTreeSelectModule,
    NzLayoutModule
  ]
})
export class NgZorroModule { }
