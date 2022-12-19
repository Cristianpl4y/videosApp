import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrollDaMontanhaPage } from './troll-da-montanha.page';

const routes: Routes = [
  {
    path: '',
    component: TrollDaMontanhaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrollDaMontanhaPageRoutingModule {}
