/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ResultsContainer } from './results.container';

describe('ResultsContainer', () => {
  let component: ResultsContainer;
  let fixture: ComponentFixture<ResultsContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
