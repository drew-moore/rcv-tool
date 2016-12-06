/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppContainer } from './app.container';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppContainer
      ],
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppContainer);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'rcv works!'`, async(() => {
    let fixture = TestBed.createComponent(AppContainer);
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('rcv works!');
  }));

  it('should render title in a h1 tag', async(() => {
    let fixture = TestBed.createComponent(AppContainer);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('rcv works!');
  }));
});
