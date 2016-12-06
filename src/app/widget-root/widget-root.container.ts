import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rcv-widget-root',
  template: `<router-outlet></router-outlet>`
})
export class WidgetRootContainer implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
