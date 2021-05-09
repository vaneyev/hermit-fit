import { NgModule } from '@angular/core';
import {NzTreeSelectModule} from 'ng-zorro-antd/tree-select';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzTableModule} from 'ng-zorro-antd/table';
import {NzDatePickerModule} from 'ng-zorro-antd/date-picker';
import {NzGridModule} from 'ng-zorro-antd/grid';
import {NzInputModule} from 'ng-zorro-antd/input';

@NgModule({
  exports: [
    NzTreeSelectModule,
    NzLayoutModule,
    NzTableModule,
    NzDatePickerModule,
    NzGridModule,
    NzInputModule
  ]
})
export class NgZorroModule { }
