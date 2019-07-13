import { Observable } from 'rxjs';
import { Experience } from 'src/app/entities/experience';

export abstract class ExperienceRepository {
    abstract getExperience(profileId: string): Observable<Experience[]>;
}
