import { Injectable } from '@angular/core';
import { ExperienceRepository } from 'src/app/usecases/repository/experience-repository';
import { Observable } from 'rxjs';
import { Experience, ExperienceSection, Company } from 'src/app/entities/experience';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService implements ExperienceRepository {

  constructor(private http: HttpClient) { }
  getExperience(profileId: string): Observable<Experience[]> {
    try {
      const lstHeaders = new HttpHeaders({
        // 'Authorization': `Bearer ${ localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json'
      });
      const url = `${environment.urlApi}experience/${profileId}`;
      return this.http.get(url, { headers: lstHeaders }).pipe(
        map((response: any) => {
          const experienceArray = new Array<Experience>();
          response.forEach(experience => {
            const newExperience = new Experience(
              experience.startDate,
              experience.position,
              new Company(experience.company.name,
                experience.company.description,
                experience.company.website),
              experience.endDate,
              experience.present,
              experience.description);
            newExperience.addRangeExperienceSection(experience.experienceSection);
            experienceArray.push(newExperience);
          });
          return experienceArray;
        }));
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}
