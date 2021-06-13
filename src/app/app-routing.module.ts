import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './forms/forms.component';
import { HomeComponent } from './home/home.component';
import { LocationComponent } from './location/location.component';
import { VaccineComponent } from './vaccine/vaccine.component';

const routes: Routes = [
  {
    path:'',component:VaccineComponent
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'pincode',component:FormsComponent
  },
  {
    path:'location',component:LocationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
