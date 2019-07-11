import { Injectable } from '@angular/core';
import { ProfileRepository } from '../repository/profile-repository';
import { Observable } from 'rxjs';
import { Profile } from 'src/app/entities/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileUseCase {

  constructor(private profileRepository: ProfileRepository) { }

  getProfile(userId: string): Observable<Profile> {
    return this.profileRepository.getProfile(userId);
  }
}
