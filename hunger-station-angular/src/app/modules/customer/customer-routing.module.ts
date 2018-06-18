import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SampleComponent } from './components/sample/sample.component';

import { ResturantMenuComponent } from './components/resturant-menu/resturant-menu.component';

const routes: Routes = [
  { path: 'sample', component: SampleComponent },
  { path: 'resturant-menu', component: ResturantMenuComponent },
  { path: '', component: LoginComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CutomerRoutingModule {
}
