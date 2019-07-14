import { Component, OnInit, Input } from '@angular/core';
import { Experience } from 'src/app/entities/experience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('dataExperience') public experiecenArray: Experience[];
  constructor() { }

  ngOnInit() {
  }

}
