import { Injectable } from '@angular/core';
import { ExperienceRepository } from '../repository/experience-repository';
import { Observable } from 'rxjs';
import { Experience } from 'src/app/entities/experience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceUseCase {

  constructor(private experienceRepository: ExperienceRepository) { }
  getExperience(profileId: string): Observable<Experience[]> {
    return this.experienceRepository.getExperience(profileId);
  }
}
