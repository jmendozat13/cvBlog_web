import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SkillRepository } from 'src/app/usecases/repository/skill-repository';
import { Observable } from 'rxjs';
import { Skill } from 'src/app/entities/skill';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SkillService implements SkillRepository {

  constructor(private http: HttpClient) { }

  getSkillsByProfileId(profileId: string): Observable<Skill[]> {
    try {
      const lstHeaders = new HttpHeaders({
        // 'Authorization': `Bearer ${ localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json'
      });
      const url = `${environment.urlApi}skill/${profileId}`;
      return this.http.get(url, { headers: lstHeaders }).pipe(
        map((response: any) => {
          const skillArray = new Array<Skill>();
          response.forEach(skill => {
            const newSkill = new Skill(
              skill.name,
              skill.type
            );
            newSkill.addRangeTools(skill.tools);
            skillArray.push(newSkill);
          });
          return skillArray;
        }));
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}
