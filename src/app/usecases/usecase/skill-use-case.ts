import { Injectable } from '@angular/core';
import { SkillRepository } from '../repository/skill-repository';
import { Observable } from 'rxjs';
import { Skill } from 'src/app/entities/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillUseCase {

  constructor(private skillRepository: SkillRepository) { }

  getSkillsByProfileId(profileId: string): Observable<Skill[]> {
    return this.skillRepository.getSkillsByProfileId(profileId);
  }
}
