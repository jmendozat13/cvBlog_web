import { Injectable } from '@angular/core';
import { LoadView } from '../../loadview';
import { Profile } from 'src/app/entities/profile';
import { ProfileUseCase } from 'src/app/usecases/usecase/profile-use-case';


@Injectable({
  providedIn: 'root'
})
export class ProfilePresenter {
  private profileView: ProfileView;
  constructor(private profileUseCase: ProfileUseCase) { }

  setProfileView(profileView: ProfileView) { this.profileView = profileView; }

  getProfile(userid: string) {
    if (this.profileView == null) { return; }
    this.profileView.showLoading();
    this.profileUseCase.getProfile(userid)
      .subscribe(
        (response: Profile) => {
          this.profileView.showProfile(response);
        },
        (error: Error) => {
          this.profileView.showError(error.message);
        },
        () => {
          this.profileView.hideLoading();
        }
      );
  }
}


export interface ProfileView extends LoadView {
  showProfile(profile: Profile);
}
