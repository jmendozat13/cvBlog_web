import { Observable } from 'rxjs';
import { Skill } from 'src/app/entities/skill';

export abstract class SkillRepository {
    abstract getSkillsByProfileId(profileId: string): Observable<Skill[]>;
}
