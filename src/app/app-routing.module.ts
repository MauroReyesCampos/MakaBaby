import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { NewuserComponent } from './pages/newuser/newuser.component';
import { MainComponent } from './pages/main/main.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { NewclientComponent } from './pages/newclient/newclient.component';

const routes: Routes = [
  {path:'', redirectTo: 'login', pathMatch: 'full'}, {path:'login', component: LoginComponent},
  {path:'newuser', component: NewuserComponent},
  {path:'main', component: MainComponent},
  {path: 'clients', component: ClientsComponent},
  {path: 'newclient', component: NewclientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
