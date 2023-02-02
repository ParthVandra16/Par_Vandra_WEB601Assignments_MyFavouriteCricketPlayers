// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
//
// import { AppComponent } from './app.component';
// import { ContentCardComponent } from './content-card/content-card.component';
// import { ContentListComponent } from './content-list/content-list.component';
// import {RouterOutlet} from "@angular/router";
//
// @NgModule({
//   declarations: [
//     AppComponent,
//     ContentCardComponent,
//     ContentListComponent
//   ],
//   imports: [
//     BrowserModule,
//     RouterOutlet
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export class AppModule {
}
