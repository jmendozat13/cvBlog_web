import { Injectable } from '@angular/core';
import { Profile } from 'src/app/entities/profile';
import { ProfileUseCase } from 'src/app/usecases/usecase/profile-use-case';
import { LoadView } from '../loadview';
import { ExperienceUseCase } from 'src/app/usecases/usecase/experience-use-case';
import { Experience } from 'src/app/entities/experience';
import { SkillUseCase } from 'src/app/usecases/usecase/skill-use-case';
import { Skill } from 'src/app/entities/skill';


@Injectable({
    providedIn: 'root'
})
export class MycvPresenter {
    private mycvView: MycvView;
    constructor(
        private profileUseCase: ProfileUseCase,
        private experienceUseCase: ExperienceUseCase,
        private skillUseCase: SkillUseCase) { }

    setMycvView(mycvView: MycvView) { this.mycvView = mycvView; }

    getProfile(userid: string) {
        if (this.mycvView == null) { return; }
        this.mycvView.showLoading();
        this.profileUseCase.getProfile(userid)
            .subscribe(
                (response: Profile) => {
                    this.mycvView.showProfile(response);
                },
                (error: Error) => {
                    this.mycvView.showError(error.message);
                    this.mycvView.hideLoading();
                },
                () => {
                    this.mycvView.hideLoading();
                }
            );
    }

    getExperience(profileId: string) {
        if (this.mycvView == null) { return; }
        this.experienceUseCase.getExperience(profileId)
            .subscribe(
                (response: Experience[]) => {
                    this.mycvView.showExperience(response);
                },
                (error: Error) => {
                    this.mycvView.showError(error.message);
                },
                () => {
                    this.mycvView.hideLoading();
                }
            );
    }

    getSkillsByProfile(profileId: string) {
        if (this.mycvView == null) { return; }
        this.skillUseCase.getSkillsByProfileId(profileId)
            .subscribe(
                (response: Skill[]) => {
                    this.mycvView.showSkills(response);
                },
                (error: Error) => {
                    this.mycvView.showError(error.message);
                }, () => {
                    this.mycvView.hideLoading();
                }
            );
    }
}

export interface MycvView extends LoadView {
    showProfile(profile: Profile);
    showExperience(experience: Experience[]);
    showSkills(skills: Skill[]);
}
