import { Component, OnInit } from '@angular/core';
import { PageService } from 'src/app/services/page.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userEmail!: string;
  userPassword!: string;
  
  constructor(private pageService: PageService, private userService: UsersService) { }

  ngOnInit() {
    this.pageService.showHeader = false;
  }

  userLogin() {
    this.userService.login(this.userEmail, this.userPassword);
  }

}
