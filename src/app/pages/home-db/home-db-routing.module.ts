import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeDBPage } from './home-db.page';

const routes: Routes = [
  {
    path: '',
    component: HomeDBPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeDBPageRoutingModule {}
