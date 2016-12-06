import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {WebsiteRootContainer} from "./website-root.container";
import { BallotContainer } from "../ballot/ballot.container";

const SITE_ROUTES = [
  {
    path: '',
    component: WebsiteRootContainer,
    children: [
      {
        path: 'poll/:pollId/ballot',
        component: BallotContainer
      },
      {
        path: 'poll/:pollId',
        redirectTo: 'poll/:pollId/ballot',
        pathMatch:'full'
      }
    ]
  }

];



@NgModule({
  imports: [
    RouterModule.forChild( SITE_ROUTES )
  ],
  exports: [RouterModule]
})
export class WebsiteRoutingModule {}
