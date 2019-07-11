import { Injectable } from '@angular/core';
import { ProfileRepository } from 'src/app/usecases/repository/profile-repository';
import { Observable } from 'rxjs';
import { Profile } from 'src/app/entities/profile';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileService implements ProfileRepository {

  constructor(private http: HttpClient) { }

  getProfile(userid: string): Observable<Profile> {
    try {
      const lstHeaders = new HttpHeaders({
        // 'Authorization': `Bearer ${ localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json'
      });
      const url = `${environment.urlApi}profile/${userid}`;
      return this.http.get(url, { headers: lstHeaders }).pipe(
        map((response: any) => {
          return new Profile(response.fullName,
            response.urlImage,
            response.specialty,
            response.email,
            response.phoneNumber,
            response.objectives);
        }));
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}
