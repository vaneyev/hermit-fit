import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NZ_I18N, en_US} from 'ng-zorro-antd/i18n';
import {registerLocaleData} from '@angular/common';
import en from '@angular/common/locales/en';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MovementService} from './movement.service';
import {NzTreeSelectModule} from 'ng-zorro-antd/tree-select';
import { TreeNodesPipe } from './treeNodes.pipe';
import {NzGridModule} from 'ng-zorro-antd/grid';
import {NzSpaceModule} from 'ng-zorro-antd/space';
import {NzLayoutModule} from 'ng-zorro-antd/layout';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    TreeNodesPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzTreeSelectModule,
    NzGridModule,
    NzLayoutModule
  ],
  providers: [
    {provide: NZ_I18N, useValue: en_US},
    MovementService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
