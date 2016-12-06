import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeContainer } from './home.container';
import { HomeComponent } from './component/home.component';
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [ HomeContainer, HomeComponent]
})
export class HomeModule { }
