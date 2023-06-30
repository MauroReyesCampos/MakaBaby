import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewuserComponent } from './pages/newuser/newuser.component';
import { MainComponent } from './pages/main/main.component';
import { ClientsComponent } from './pages/clients/clients.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    NewuserComponent,
    MainComponent,
    ClientsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
