import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoctificationsPage } from './noctifications.page';

const routes: Routes = [
  {
    path: '',
    component: NoctificationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoctificationsPageRoutingModule {}
