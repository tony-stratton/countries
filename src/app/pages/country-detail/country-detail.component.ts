import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { isNullOrUndefined } from 'util';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.less']
})
export class CountryDetailComponent implements OnInit {
  public objectKeys = Object.keys;
  public country;
  public flag;
  public location;

  constructor(public sharedService: SharedService, private router: Router,
    private _location: Location) {
    if (isNullOrUndefined(this.sharedService.getActiveCountry())) {
      this.router.navigate(['']);
    }
    this.location = _location;
  }

  ngOnInit() {
    const active = this.sharedService.getActiveCountry();
    this.flag = active['flag'];
    this.country = {
      Name: active['name'],
      Capital: active['capital'],
      Population: active['population'],
      Region: active['region']
    };
    console.log(this.country);
  }

}
