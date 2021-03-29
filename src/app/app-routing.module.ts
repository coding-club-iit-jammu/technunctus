import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './components/events/events.component';
import { HomeComponent } from './components/home/home.component';
import { SponsorComponent } from './components/sponsor/sponsor.component';
import { TeamComponent } from './components/team/team.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'Events',
    component: EventsComponent
  },
  {
    path:'Sponsor',
    component: SponsorComponent
  },
  {
    path:'Team',
    component: TeamComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
