import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { ExperienceComponent } from './experience/experience.component';
import { ToolsComponent } from './tools/tools.component';
import { MycvComponent } from './mycv.component';

@NgModule({
  declarations: [
    ProfileComponent,
    ExperienceComponent,
    ToolsComponent,
    MycvComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [MycvComponent]
})
export class MycvModule { }
