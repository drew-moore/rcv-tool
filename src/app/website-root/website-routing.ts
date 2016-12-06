import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {WebsiteRootContainer} from "./website-root.container";

const SITE_ROUTES = [
  {
    path: '',
    component: WebsiteRootContainer,
  }

];



@NgModule({
  imports: [
    RouterModule.forChild( SITE_ROUTES )
  ],
  exports: [RouterModule]
})
export class WebsiteRoutingModule {}
