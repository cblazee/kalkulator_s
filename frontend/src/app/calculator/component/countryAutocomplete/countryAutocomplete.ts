import {Component} from '@angular/core';
import {CalculateService} from "../../service/calculateService";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'countryAutocomplete',
  templateUrl: './countryAutocomplete.html',
  styleUrls: ['./countryAutocomplete.css']
})

export class CountryAutocomplete{
  countryList: any;
  selectedCountry: Object = {};


  constructor(private http: HttpClient, private calculateService:CalculateService) {
    this.http.get('./getAutocomplete')
      .subscribe(
        data => {
          this.countryList = data;
          this.selectedCountry = this.countryList[0];
          this.setCode();
        }
      );

  }

  setCode() {
    this.calculateService.setCode(this.selectedCountry);
  }
}
