import { Component } from '@angular/core';

@Component({
  selector: 'ng-header',
  templateUrl: './app/shared/header/header.template.html',
  styles: [ './app/shared/header/header.style.css' ]
})
export class HeaderComponent {
  public title: string;
}
