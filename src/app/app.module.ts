import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppContainer } from './app.container';
import { RouterModule } from "@angular/router";
import { CoreModule } from "./core/core.module";

export const APP_ROUTES = [
  {
    path: 'embed',
    loadChildren: 'app/widget-root/widget-root.module#WidgetRootModule'
  },
  {
    path: '',
    loadChildren: 'app/website-root/website-root.module#WebsiteRootModule'
  }
];

@NgModule({
  declarations: [
    AppContainer
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),

    CoreModule
  ],
  providers: [],
  bootstrap: [ AppContainer]
})
export class AppModule { }
