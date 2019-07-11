import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/entities/profile';
import { ProfilePresenter, ProfileView } from './profile.presenter';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, ProfileView {

  constructor(private profilePresenter: ProfilePresenter) {
    this.profilePresenter.setProfileView(this);
  }

  ngOnInit() {
    this.profilePresenter.getProfile('5d20361799119a2a246a062c');
  }

  showProfile(profile: Profile) {
    console.log(profile);
  }
  showLoading() {
    console.log('cargando...');
  }
  hideLoading() {
    console.log('carga completa...');
  }
  showError(error: string) {
    console.log(`Error: ${error}`);
  }
}
