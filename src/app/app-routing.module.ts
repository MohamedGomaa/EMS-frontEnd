import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { VisitComponent } from './visit/visit.component';

const routes: Routes = [
{path:'home',component:HomeComponent},
{path:'login',component:SigninComponent},
{path:'register',component:SignupComponent},
{path:'visit',component:VisitComponent},
{path:'profile',component:ProfileComponent},
{ path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
