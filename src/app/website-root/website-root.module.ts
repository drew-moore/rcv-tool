import { NgModule } from '@angular/core';
import { WebsiteRootContainer } from './website-root.container';
import { WebsiteRootComponent } from './component/website-root.component';
import { WebsiteRoutingModule } from "./website-routing";
import { SharedModule } from "../shared/shared.module";
import { BallotModule } from "../ballot/ballot.module";

@NgModule({
  imports: [
    WebsiteRoutingModule,
    SharedModule,

    BallotModule
  ],
  declarations: [ WebsiteRootContainer, WebsiteRootComponent]
})
export class WebsiteRootModule { }
