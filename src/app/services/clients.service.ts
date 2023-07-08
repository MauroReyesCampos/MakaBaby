import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import swal from 'sweetalert';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  private apiUrl = 'http://localhost:3000/api/clients';

  constructor(private http: HttpClient) { }

  create(name: string, personalId: string, adress1: string, adress2: string, neighborhood: string, city: string, state: string, phone: string, obs: string): void {
    const createUrl = `${this.apiUrl}/create`;
    const formData = {
      name: name,
      personalId: personalId,
      adress1: adress1,
      adress2: adress2,
      neighborhood:neighborhood,
      city: city,
      state: state,
      phone: phone,
      obs: obs
    }
    this.http.post(createUrl, formData).subscribe(
      (response: any) => {
        swal("Cliente creado exitosamente", "", "success");
      },
      (error) => {
        if (error instanceof HttpErrorResponse) {
          if (error.error instanceof Error) {
            console.log("Error:", error.error.message);
          }
          // swal("El correo electrónico ingresado ya existe", "", "error");
        } else {
          console.error(`Codigo de error ${error.status}` + `mensaje: ${error.error}`);
        }
      }
    )
  }
}
