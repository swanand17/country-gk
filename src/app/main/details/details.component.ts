import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  @Input() selectedCountry: any;
  @Input() borderCountries: any;

  @Output() backCalled = new EventEmitter();

  languages = [];
  currencies = [];

  constructor() {}

  ngOnInit(): void {
    this.languages = this.selectedCountry.languages.map(
      (language: { name: any }) => {
        return language.name;
      }
    );

    this.currencies = this.selectedCountry.currencies.map(
      (currency: { name: any }) => {
        return currency.name;
      }
    );
  }
}
