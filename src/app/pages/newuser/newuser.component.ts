import { registerLocaleData } from '@angular/common';
import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css'],
})
export class NewuserComponent {
  firstName!: string;
  lastName!: string;
  email!: string;
  password!: string;
  confirmPassword!: string;
  role: string = "user";
  registrationDate!: string;

  constructor(private userService: UsersService) {
    const date = new Date();
    this.registrationDate = date.toLocaleDateString();
  }

  createUser() {
    if (this.password !== this.confirmPassword) {
      swal('Las contraseñas ingresadas no coinciden', '', 'error');
    } else {
      this.userService.create(
        this.firstName,
        this.lastName,
        this.email,
        this.password,
        this.role,
        this.registrationDate
      );
      this.firstName = "";
      this.lastName = "";
      this.email = "";
      this.password = "";
      this.confirmPassword = "";
      this.role = "user";
    }
  }
}
