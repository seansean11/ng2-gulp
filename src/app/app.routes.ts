import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NoContent } from './no-content/no-content';

export const ROUTES : Routes = [
  { path: '', component: HomeComponent },
  { path: '**', component: NoContent }
];
