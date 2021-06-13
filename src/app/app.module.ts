import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsComponent } from './forms/forms.component';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { LocationComponent } from './location/location.component';
import { VaccineComponent } from './vaccine/vaccine.component';
import { DatePipe } from '@angular/common';
import {CarouselModule}from "ngx-bootstrap/carousel";
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormsComponent,
    LocationComponent,
    VaccineComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  CarouselModule.forRoot(),
  ServiceWorkerModule.register('ngsw-worker.js', {
    enabled: environment.production,
    // Register the ServiceWorker as soon as the app is stable
    // or after 30 seconds (whichever comes first).
    registrationStrategy: 'registerWhenStable:30000'
  })

  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
