import { NgModule } from '@angular/core';
import { CreateContainer } from './create.container';
import { CreateComponent } from "./component/create.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [ CreateContainer, CreateComponent]
})
export class CreateModule { }
