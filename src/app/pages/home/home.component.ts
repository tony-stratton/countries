import { Component, OnInit, OnDestroy } from '@angular/core';
import { CountriesService } from 'src/app/services/countries.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit, OnDestroy {
  private subCountries: Subscription;
  public countries: any[];
  public searchText;

  constructor(public countriesService: CountriesService,
    private route: ActivatedRoute,
    private router: Router,
    public sharedService: SharedService) { }

  ngOnInit() {
    this.getCountries();
  }

  ngOnDestroy() {
    if (this.subCountries) {
      this.subCountries.unsubscribe();
    }
  }

  getCountries() {
    this.subCountries = this.countriesService.getCountries().subscribe(
      res => {
        if (res) {
          console.log(res);
          this.setCountries(res);
        }
      }
    );
  }

  setCountries(data) {
    this.sharedService.setCountries(data);
    this.countries = data;
  }

  getCountry(name) {
    this.sharedService.setActiveCountry(this.countries.find(i => i.name === name));
    this.router.navigate(['country']);
  }

}
