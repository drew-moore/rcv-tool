import { NgModule } from '@angular/core';
import { WidgetRootContainer } from './widget-root.container';
import { WidgetRoutingModule } from "./widget-routing";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [
    SharedModule,

    WidgetRoutingModule
  ],
  declarations: [ WidgetRootContainer]
})
export class WidgetRootModule { }
