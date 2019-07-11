import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { ExperienceComponent } from './experience/experience.component';
import { ToolsComponent } from './tools/tools.component';
import { MycvComponent } from './mycv.component';
import { ProfileRepository } from 'src/app/usecases/repository/profile-repository';
import { ProfileService } from 'src/app/services/service/profile.service';

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
  exports: [MycvComponent],
  providers: [{ provide: ProfileRepository, useValue: ProfileService }],
})
export class MycvModule { }
