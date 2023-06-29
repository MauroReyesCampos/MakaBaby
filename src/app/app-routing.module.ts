import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { NewuserComponent } from './pages/newuser/newuser.component';

const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch: 'full'}, {path:'home', component: LoginComponent},
  {path:'newuser', component: NewuserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
