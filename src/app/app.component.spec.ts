import {
  async,
  TestBed
} from '@angular/core/testing';
import { Component } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';

@Component({
  selector: 'ng-header',
  template: '<div>Header</div>'
})
class MockHeaderComponent { }

@Component({
  selector: 'ng-footer',
  template: '<div>Footer</div>'
})
class MockFooterComponent { }

describe('App Component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MockHeaderComponent, MockFooterComponent, AppComponent],
      imports: [ RouterTestingModule ]
    });
  });

  it('Should: Include Header, Footer, and main content', async(() => {
    TestBed.compileComponents().then(() => {
      let fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      let compiled = fixture.debugElement.nativeElement;

      expect(compiled.textContent).toContain('Header');
      expect(compiled.textContent).toContain('My Angular 2 Application');
      expect(compiled.textContent).toContain('Footer');
    });
  }));
});
