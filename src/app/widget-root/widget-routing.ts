import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {WidgetRootContainer} from "./widget-root.container";
import { BallotContainer } from "../ballot/ballot.container";

const WIDGET_ROUTES = [
  {
    path: '',
    component: WidgetRootContainer,
    children: [
      {
        path: ':pollId/ballot',
        component: BallotContainer
      },
      {
        path: ':pollId',
        redirectTo: '/:pollId/ballot',
        pathMatch:'full'
      }

    ]
  }
];



@NgModule({
  imports: [
    RouterModule.forChild( WIDGET_ROUTES )
  ],
  exports: [RouterModule]
})
export class WidgetRoutingModule {}
