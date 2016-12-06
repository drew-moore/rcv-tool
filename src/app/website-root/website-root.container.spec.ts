/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WebsiteRootContainer } from './website-root.container';

describe('WebsiteRootContainer', () => {
  let component: WebsiteRootContainer;
  let fixture: ComponentFixture<WebsiteRootContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebsiteRootContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsiteRootContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
