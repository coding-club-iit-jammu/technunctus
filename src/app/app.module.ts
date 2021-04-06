import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { AngularTiltModule } from 'angular-tilt';
import { EventsComponent } from './components/events/events.component';
import { TeamComponent } from './components/team/team.component';
import {MatButtonModule} from '@angular/material/button';
import { SponsorComponent } from './components/sponsor/sponsor.component';
import { SingleeventComponent } from './components/singleevent/singleevent.component';
import { GtagModule } from 'angular-gtag';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EventsComponent,
    TeamComponent,
    SponsorComponent,
    SingleeventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularTiltModule,
    MatButtonModule,
    GtagModule.forRoot({ trackingId: 'UA-193856325-1', trackPageviews: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
