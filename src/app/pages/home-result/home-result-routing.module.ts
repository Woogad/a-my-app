import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeResultPage } from './home-result.page';

const routes: Routes = [
  {
    path: '',
    component: HomeResultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeResultPageRoutingModule {}
