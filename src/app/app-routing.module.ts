import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { ViewOneComponent } from './view-one/view-one.component';

const routes: Routes = [
//login
{
path:'',component:LoginComponentComponent
},
{
  path:'dashboard', component:DashboardComponent
},
{
  path:'dashboard/view-one-employee/:id', component:ViewOneComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
