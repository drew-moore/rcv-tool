/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CreateContainer } from './create.container';

describe('CreateContainer', () => {
  let component: CreateContainer;
  let fixture: ComponentFixture<CreateContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
