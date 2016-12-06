import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetRootContainer } from './widget-root.container';
import { WidgetRoutingModule } from "./widget-routing";

@NgModule({
  imports: [
    CommonModule,

    WidgetRoutingModule
  ],
  declarations: [ WidgetRootContainer]
})
export class WidgetRootModule { }
