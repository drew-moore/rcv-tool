import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {WebsiteRootContainer} from "./website-root.container";
import { BallotContainer } from "../ballot/ballot.container";
import { ResultsContainer } from "../results/results.container";
import { CreateContainer } from "../create/create.container";
import { HomeContainer } from "../home/home.container";

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
        path: 'poll/:pollId/results',
        component: ResultsContainer
      },
      {
        path: 'poll/:pollId',
        redirectTo: 'poll/:pollId/ballot',
        pathMatch:'full'
      },

      {
        path:'/create',
        component: CreateContainer
      },
      {
        path: '',
        component: HomeContainer
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
