import { NgModule } from '@angular/core';
import { WebsiteRootContainer } from './website-root.container';
import { WebsiteRootComponent } from './component/website-root.component';
import { WebsiteRoutingModule } from "./website-routing";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [
    SharedModule,

    WebsiteRoutingModule
  ],
  declarations: [ WebsiteRootContainer, WebsiteRootComponent]
})
export class WebsiteRootModule { }
