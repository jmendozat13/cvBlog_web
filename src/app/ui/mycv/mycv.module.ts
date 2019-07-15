import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { ExperienceComponent } from './experience/experience.component';
import { ToolsComponent } from './tools/tools.component';
import { MycvComponent } from './mycv.component';
import { ProfileRepository } from 'src/app/usecases/repository/profile-repository';
import { ProfileService } from 'src/app/services/service/profile.service';
import { ExperienceRepository } from 'src/app/usecases/repository/experience-repository';
import { ExperienceService } from 'src/app/services/service/experience.service';
import { TooltipModule } from 'ng2-tooltip-directive';
import { SpinnerComponent } from './spinner/spinner.component';
@NgModule({
  declarations: [
    ProfileComponent,
    ExperienceComponent,
    ToolsComponent,
    MycvComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    TooltipModule
  ],
  exports: [MycvComponent],
  providers: [{ provide: ProfileRepository, useClass: ProfileService },
  { provide: ExperienceRepository, useClass: ExperienceService }]
})
export class MycvModule { }
