import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Layouts } from '@app/app.component';
import { RegisterComponent } from './register.component';
const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
    data: { layout: Layouts.centeredContent },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterRoutingModule {}
