import { Observable } from 'rxjs';
import { Profile } from 'src/app/entities/profile';

export abstract class ProfileRepository {
    abstract getProfile(userid: string): Observable<Profile>;
}
