import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsiteRootContainer } from './website-root.container';
import { WebsiteRootComponent } from './component/website-root.component';
import { WebsiteRoutingModule } from "./website-routing";

@NgModule({
  imports: [
    CommonModule,
    WebsiteRoutingModule
  ],
  declarations: [ WebsiteRootContainer, WebsiteRootComponent]
})
export class WebsiteRootModule { }
