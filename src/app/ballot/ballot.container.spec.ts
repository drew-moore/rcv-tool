/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BallotContainer } from './ballot.container';

describe('BallotContainer', () => {
  let component: BallotContainer;
  let fixture: ComponentFixture<BallotContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BallotContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BallotContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
