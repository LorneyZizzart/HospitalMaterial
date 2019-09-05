import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HospitalComponent } from './components/hospital/hospital.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'hospital', component: HospitalComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
