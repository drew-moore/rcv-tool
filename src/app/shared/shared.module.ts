import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule, MdIconRegistry } from "@angular/material";
import { AuthWidgetComponent } from './auth-widget/auth-widget.component';
import { AuthWidgetContainer } from "./auth-widget/auth-widget.container";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule.forRoot()
  ],
  declarations: [AuthWidgetComponent, AuthWidgetContainer],
  exports: [CommonModule, MaterialModule, AuthWidgetContainer]
})
export class SharedModule {

  constructor(iconRegistry:MdIconRegistry){
    iconRegistry.registerFontClassAlias('fontawesome', 'fa');

  }

}
