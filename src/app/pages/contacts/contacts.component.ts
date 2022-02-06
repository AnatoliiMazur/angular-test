import { Component, OnInit } from '@angular/core';
import {AddressesService, CountryDto} from "../../shared/services/addresses.service";


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  addresses: Array<CountryDto>;

  constructor(private addressesService:AddressesService) {}

  ngOnInit(): void {
    this.getAddressesList();
  }

  private getAddressesList():void {
    this.addresses = this.addressesService.addressesList
  }

}
