import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivitiesService } from './activities.service';
import { ActivitiesComponent } from './activities/activities.component';
import { ActivitysuccessComponent } from './activitysuccess/activitysuccess.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { WelcomeuserComponent } from './welcomeuser/welcomeuser.component';

const routes: Routes = [
  {path:'',component:WelcomepageComponent},
  {path:'home',component:WelcomepageComponent},
  {path:'user/:username',component:WelcomeuserComponent},
  {path:'activities',component:ActivitiesComponent},
  {path:'interested',component:ActivitysuccessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

