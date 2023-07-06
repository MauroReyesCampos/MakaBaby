import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewuserComponent } from './pages/newuser/newuser.component';
import { MainComponent } from './pages/main/main.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { NewclientComponent } from './pages/newclient/newclient.component';
import { HeaderComponent } from './components/header/header.component';
import { PageService } from './services/page.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    NewuserComponent,
    MainComponent,
    ClientsComponent,
    NewclientComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
