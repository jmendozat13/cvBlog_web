import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProfileComponent } from './ui/mycv/profile/profile.component';
import { LayoutComponent } from './ui/layout/layout.component';
import { ExperienceComponent } from './ui/mycv/experience/experience.component';
import { ToolsComponent } from './ui/mycv/tools/tools.component';
import { MycvComponent } from './ui/mycv/mycv.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LayoutComponent,
    ExperienceComponent,
    ToolsComponent,
    MycvComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
