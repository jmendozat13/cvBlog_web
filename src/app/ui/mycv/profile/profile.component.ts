import { Component, OnInit, Input } from '@angular/core';
import { Profile } from 'src/app/entities/profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('dataProfile') public profile: Profile;

  constructor() { }
  ngOnInit() { }
}
