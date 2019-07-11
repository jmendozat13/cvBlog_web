import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { MycvModule } from '../mycv/mycv.module';

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    MycvModule
  ],
  exports: [LayoutComponent]
})
export class LayoutModule { }
