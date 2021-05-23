import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routes.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared.module';
import { SurveyReplyService } from './shared/survey-reply.service';
import { SurveyService } from './shared/survey.service';


@NgModule({
  // directives, components, and pipes owned by this NgModule
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
  ], // modules needed to run this module
  providers: [
    SurveyService,
    SurveyReplyService,
    Title,
   ], // additional providers needed for this module
  bootstrap: [AppComponent],
})
export class AppModule { }
