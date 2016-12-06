import { NgModule } from '@angular/core';
import { WidgetRootContainer } from './widget-root.container';
import { WidgetRoutingModule } from "./widget-routing";
import { SharedModule } from "../shared/shared.module";
import { BallotModule } from "../ballot/ballot.module";

@NgModule({
  imports: [
    WidgetRoutingModule,
    SharedModule,

    BallotModule
  ],
  declarations: [ WidgetRootContainer]
})
export class WidgetRootModule { }
