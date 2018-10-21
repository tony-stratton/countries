import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Accept':  'application/json',
    })
  };
  constructor(private http: HttpClient) { }

  getCountries() {
    const url = 'https://restcountries.eu/rest/v2/all';
    return this.http.get(url, this.httpOptions);
  }
}
