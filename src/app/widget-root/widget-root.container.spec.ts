/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WidgetRootContainer } from './widget-root.container';

describe('WidgetRootContainer', () => {
  let component: WidgetRootContainer;
  let fixture: ComponentFixture<WidgetRootContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetRootContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetRootContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
