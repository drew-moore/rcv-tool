import { NgModule } from '@angular/core';
import { BallotContainer } from './ballot.container';
import { SharedModule } from "../shared/shared.module";
import { BallotComponent } from './component/ballot.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [ BallotContainer, BallotComponent]
})
export class BallotModule { }
