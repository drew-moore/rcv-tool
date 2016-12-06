import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {WidgetRootContainer} from "./widget-root.container";
const WIDGET_ROUTES = [
  {
    path: '',
    component: WidgetRootContainer
  }

];



@NgModule({
  imports: [
    RouterModule.forChild( WIDGET_ROUTES )
  ],
  exports: [RouterModule]
})
export class WidgetRoutingModule {}
