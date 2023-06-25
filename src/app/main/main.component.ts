import { Component, OnInit } from '@angular/core';
import { COUNTRIES } from './data';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  countries = COUNTRIES;
  countriesForSearch = [...this.countries.reverse()];
  regions: Set<string> = new Set(
    this.countriesForSearch.map((country) => {
      return country.region;
    })
  );

  searchCountryFC = new FormControl();
  filterByRegionFC = new FormControl();
  selectedCountry: any;
  borderCountries: any;

  constructor() {}

  ngOnInit(): void {
    this.regions.add('All');

    this.searchCountryFC.valueChanges
      .pipe(debounceTime(300))
      .subscribe((value) => {
        this.countries = this.countriesForSearch.filter((searchedCountry) => {
          this.filterByRegionFC.setValue('');
          return searchedCountry.name
            .toLowerCase()
            .includes(value.toLowerCase());
        });
      });
  }

  regionChanged() {
    this.searchCountryFC.setValue('', { emitEvent: false });
    this.countries = this.countriesForSearch.filter((searchedCountry) => {
      if (this.filterByRegionFC.value !== 'All') {
        return searchedCountry.region === this.filterByRegionFC.value;
      } else {
        return searchedCountry;
      }
    });
  }

  selectCountry(country: any) {
    this.selectedCountry = country;

    this.borderCountries = this.countriesForSearch
      .filter((country) => {
        return this.selectedCountry.borders.includes(country.alpha3Code);
      })
      .map((country) => {
        return country.name;
      });
  }

  backCalled() {
    this.selectedCountry = null;
  }
}
