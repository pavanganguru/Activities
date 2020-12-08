import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeuserComponent } from './welcomeuser/welcomeuser.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { FormsModule } from '@angular/forms';
import { ActivitiesComponent } from './activities/activities.component';

import { ActivitiesService } from './activities.service';
import { ActivitysuccessComponent } from './activitysuccess/activitysuccess.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeuserComponent,
    WelcomepageComponent,
    ActivitiesComponent,
    ActivitysuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ActivitiesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
