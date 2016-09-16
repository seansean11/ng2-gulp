// import { async,
//         TestBed } from '@angular/core/testing';
// import { AppComponent } from './app.component';

// describe('AppComponent', () => {
//   beforeEach(() => {
//     TestBed.configureTestingModule({ declarations: [AppComponent]});
//   });

//   beforeEach(async(() => {
//     TestBed.compileComponents();
//   }))

//   it ('should build', () => {
//     let fixture = TestBed.createComponent(AppComponent);
//     // expect(fixture.componentInstance instanceof AppComponent).toBe(true, 'should create AppComponent');
//     expect(true).toBe(true);
//   });
// });

describe('Tests Should Run', () => {
  it('Should run passing tests', () => {
    expect(true).toBe(true);
  });

  it('Should run failing tests', () => {
    expect(true).toBe(false);
  });

  xit('Should skip tests', () => {
    expect(0).toBe(0);
  });
});
