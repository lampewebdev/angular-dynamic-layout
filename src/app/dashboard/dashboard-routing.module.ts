import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { Layouts } from '../app.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: { layout: Layouts.Main },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
