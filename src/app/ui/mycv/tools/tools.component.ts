import { Component, OnInit, Input } from '@angular/core';
import { Skill } from 'src/app/entities/skill';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('dataSkills') public skills: Skill[];
  constructor() { }

  ngOnInit() {
  }

}
