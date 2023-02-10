import { ModuleWithProviders, NgModule, Type} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ContentCardComponent} from './content-card/content-card.component';
import {ContentListComponent} from './content-list/content-list.component';
import {ContentFilterPipe} from './content-list/content-list.pipe';
import {NgForOf} from "@angular/common";

let AppRoutingModule: any[] | Type<any> | ModuleWithProviders<{}>;

// @ts-ignore
// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponent,
    ContentListComponent,
    ContentFilterPipe,
  ],

  providers: [],
  bootstrap: [AppComponent],
  imports: [
    NgForOf
  ]
})
export class AppModule {}
