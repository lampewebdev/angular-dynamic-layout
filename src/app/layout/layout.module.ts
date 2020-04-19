import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { CenteredContentLayoutComponent } from './centered-content-layout/centered-content-layout.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@app/material-modules';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    MaterialModule,
    FlexLayoutModule,
  ],
  exports: [MainLayoutComponent, CenteredContentLayoutComponent],
  declarations: [MainLayoutComponent, CenteredContentLayoutComponent],
})
export class LayoutModule {}
