import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import swal from 'sweetalert';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl = 'http://localhost:3000/api/users';

  constructor(private http: HttpClient) { }

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
}
