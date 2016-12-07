import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../core/services/auth";

@Component({
  selector: 'rcv-auth-widget',
  template: `<rcv-auth-widget-cmp [state]="authService.state"></rcv-auth-widget-cmp>`
})
export class AuthWidgetContainer implements OnInit {

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

}
