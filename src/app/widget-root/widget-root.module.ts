import { NgModule } from '@angular/core';
import { WidgetRootContainer } from './widget-root.container';
import { WidgetRoutingModule } from "./widget-routing";
import { SharedModule } from "../shared/shared.module";
import { BallotModule } from "../ballot/ballot.module";
import { ResultsModule } from "../results/results.module";

@NgModule({
  imports: [
    WidgetRoutingModule,
    SharedModule,

    BallotModule,
    ResultsModule
  ],
  declarations: [ WidgetRootContainer]
})
export class WidgetRootModule { }
