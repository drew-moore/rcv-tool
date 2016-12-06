import { NgModule } from '@angular/core';
import { ResultsContainer } from './results.container';
import { ResultsComponent } from './component/results.component';
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [ ResultsContainer, ResultsComponent]
})
export class ResultsModule { }
