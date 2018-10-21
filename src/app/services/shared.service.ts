import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public countries: any[];
  public activeCountry: string;

  constructor() { }

  setActiveCountry(country) {
    this.activeCountry = country;
  }

  getActiveCountry() {
    return this.activeCountry;
  }

  setCountries(countries) {
    this.countries = countries;
  }

  getCountries() {
    return this.countries;
  }
}
