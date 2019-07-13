import { Component, OnInit } from '@angular/core';
import { MycvPresenter, MycvView } from './mycv.presenter';
import { Profile } from 'src/app/entities/profile';
import { Experience } from 'src/app/entities/experience';

@Component({
  selector: 'app-mycv',
  templateUrl: './mycv.component.html'
})
export class MycvComponent implements OnInit, MycvView {

  public profile: Profile;
  public experienceArray: Experience[];

  constructor(private mycvPresenter: MycvPresenter) {
    this.mycvPresenter.setMycvView(this);
  }

  ngOnInit() {
    this.mycvPresenter.getProfile('5d20361799119a2a246a062c');
  }
  showExperience(experience: Experience[]) {
    this.experienceArray = experience;
  }
  showProfile(profile: Profile) {
    this.profile = profile;
    this.mycvPresenter.getExperience(this.profile.id);
  }
  showLoading() {
    console.log('Cargando...');
  }
  hideLoading() {
    console.log('Carga completa...');
  }
  showError(error: string) {
    console.log(`Error: ${error}`);
  }

}
