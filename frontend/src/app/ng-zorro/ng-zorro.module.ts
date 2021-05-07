import { NgModule } from '@angular/core';
import {NzTreeSelectModule} from 'ng-zorro-antd/tree-select';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzTableModule} from 'ng-zorro-antd/table';
import {NzCalendarModule} from 'ng-zorro-antd/calendar';
import {NzDatePickerModule} from 'ng-zorro-antd/date-picker';

@NgModule({
  exports: [
    NzTreeSelectModule,
    NzLayoutModule,
    NzTableModule,
    NzDatePickerModule
  ]
})
export class NgZorroModule { }
