import { Component, OnInit, Input } from '@angular/core';
import { Skill } from 'src/app/entities/skill';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('dataSkills') public skills: Skill[];
  skillTag: Skill[];
  skillProgress: Skill[];

  constructor() { }

  ngOnInit() {
    this.skillTag = this.skills.filter(s => s.type === 'tag');
    this.skillProgress = this.skills.filter(s => s.type === 'progress');
  }
}
