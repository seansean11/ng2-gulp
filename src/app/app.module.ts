import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { HeaderComponent, FooterComponent } from './shared/index';
import { HomeComponent } from './home/index';
import { NoContentComponent } from './no-content/index';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NoContentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
