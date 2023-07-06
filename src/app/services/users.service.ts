import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import swal from 'sweetalert';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl = 'http://localhost:3000/api/users';

  constructor(private http: HttpClient, private router: Router) { }

  login(email: string, password: string) {
    const loginUrl = `${this.apiUrl}/login`;
    const formData = {
      email: email,
      password: password
    }
    this.http.post(loginUrl, formData, {headers: this.getAuthHeaders()}).subscribe(
      (response: any) => {
        localStorage.setItem('token', response.token);
        console.log("Response: ", response);
        this.router.navigate(['/main']);
      },
      (error) => {
        if (error instanceof HttpErrorResponse) {
          if ( error.error instanceof ErrorEvent) {
            console.log("Error: ", error.error.message);
          }
          swal("Correo electrónico y/o contraseña incorrectos", "", "error");
        } else {
          console.error(`Código de error ${error.status}` + `mensaje: ${error.error}`)
        }
      }
    )
  }

  create(firstName: string, lastName: string, email: string, password: string, role: string, registerDate: string): void {
    const createUrl = `${this.apiUrl}/create`;
    const formData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      role: role,
      registerDate: registerDate
    }
    this.http.post(createUrl, formData).subscribe(
      (response: any) => {
        swal("Usuario creado exitosamente", "", "success");
      },
      (error) => {
        if (error instanceof HttpErrorResponse) {
          if (error.error instanceof Error) {
            console.log("Error:", error.error.message);
          }
          swal("El correo electrónico ingresado ya existe", "", "error");
        } else {
          console.error(`Codigo de error ${error.status}` + `mensaje: ${error.error}`);
        }
      }
    )
  }

  private getAuthHeaders(): HttpHeaders {
    const authToken = localStorage.getItem("token");
    const headers = new HttpHeaders({"Authorization":`Bearer ${authToken}`});
    return headers;
  }
}
