import { Component } from '@angular/core';
import { ClientsService } from 'src/app/services/clients.service';
@Component({
  selector: 'app-newclient',
  templateUrl: './newclient.component.html',
  styleUrls: ['./newclient.component.css']
})
export class NewclientComponent {
  clientName!: string;
  clientPersonalId!: string;
  clientAdress1!: string;
  clientAdress2!: string;
  clientNeigborhood!: string;
  clientCity!: string;
  clientState!: string;
  clientPhone!: string;
  clientObs!: string;

  constructor(private clientService: ClientsService) {}

  createClient() {
    this.clientService.create(
      this.clientName,
      this.clientPersonalId,
      this.clientAdress1,
      this.clientAdress2,
      this.clientNeigborhood,
      this.clientCity,
      this.clientState,
      this.clientPhone,
      this.clientObs
    );
    this.clientName = "";
    this.clientPersonalId = "";
    this.clientAdress1 = "";
    this.clientAdress2 = "";
    this.clientNeigborhood = "";
    this.clientCity = "";
    this.clientState = "";
    this.clientPhone = "";
    this.clientObs = "";
  }
}
