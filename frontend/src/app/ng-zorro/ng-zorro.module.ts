import { NgModule } from '@angular/core';
import {NzTreeSelectModule} from 'ng-zorro-antd/tree-select';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzTableModule} from 'ng-zorro-antd/table';
import {NzDatePickerModule} from 'ng-zorro-antd/date-picker';
import {NzGridModule} from 'ng-zorro-antd/grid';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzModalModule} from 'ng-zorro-antd/modal';

@NgModule({
  exports: [
    NzTreeSelectModule,
    NzLayoutModule,
    NzTableModule,
    NzDatePickerModule,
    NzGridModule,
    NzInputModule,
    NzButtonModule,
    NzIconModule,
    NzModalModule
  ]
})
export class NgZorroModule { }
