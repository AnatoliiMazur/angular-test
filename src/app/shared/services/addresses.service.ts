import { Injectable } from "@angular/core";
import data from "../mocks/countries.json"

export type CountryDto = {
  country: string,
  address: string,
  phones: Array<string>,
  mails: Array<string>
}

@Injectable({
  providedIn: 'root'
})
export class AddressesService {
  private addresses: Array<CountryDto> = data;

  get addressesList():Array<CountryDto> {
    return this.addresses;
  }
}
