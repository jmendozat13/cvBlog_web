import { Injectable } from '@angular/core';
import { Profile } from 'src/app/entities/profile';
import { ProfileUseCase } from 'src/app/usecases/usecase/profile-use-case';
import { LoadView } from '../loadview';


@Injectable({
    providedIn: 'root'
})
export class MycvPresenter {
    private mycvView: MycvView;
    constructor(private profileUseCase: ProfileUseCase) { }

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
                },
                () => {
                    this.mycvView.hideLoading();
                }
            );
    }
}


export interface MycvView extends LoadView {
    showProfile(profile: Profile);
}
