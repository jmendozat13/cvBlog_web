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
import { SkillRepository } from 'src/app/usecases/repository/skill-repository';
import { SkillService } from 'src/app/services/service/skill.service';
import { EducationComponent } from './education/education.component';
import { LanguageComponent } from './language/language.component';
import { InterestsComponent } from './interests/interests.component';
import { SkillComponent } from './skill/skill.component';
import { AboutsiteComponent } from './aboutsite/aboutsite.component';
@NgModule({
  declarations: [
    ProfileComponent,
    ExperienceComponent,
    ToolsComponent,
    MycvComponent,
    SpinnerComponent,
    EducationComponent,
    LanguageComponent,
    InterestsComponent,
    SkillComponent,
    AboutsiteComponent
  ],
  imports: [
    CommonModule,
    TooltipModule
  ],
  exports: [MycvComponent],
  providers: [{ provide: ProfileRepository, useClass: ProfileService },
  { provide: ExperienceRepository, useClass: ExperienceService },
  { provide: SkillRepository, useClass: SkillService }]
})
export class MycvModule { }
