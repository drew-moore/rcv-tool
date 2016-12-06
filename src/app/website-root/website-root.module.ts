import { NgModule } from '@angular/core';
import { WebsiteRootContainer } from './website-root.container';
import { WebsiteRootComponent } from './component/website-root.component';
import { WebsiteRoutingModule } from "./website-routing";
import { SharedModule } from "../shared/shared.module";
import { BallotModule } from "../ballot/ballot.module";
import { ResultsModule } from "../results/results.module";
import { CreateModule } from "../create/create.module";
import { HomeModule } from "../home/home.module";

@NgModule({
  imports: [
    WebsiteRoutingModule,
    SharedModule,

    BallotModule,
    ResultsModule,

    HomeModule,
    CreateModule
  ],
  declarations: [ WebsiteRootContainer, WebsiteRootComponent]
})
export class WebsiteRootModule { }
