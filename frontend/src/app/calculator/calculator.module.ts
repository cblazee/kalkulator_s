import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { Calculator } from './calculator';
import { CalculateButton } from "./component/calculateButton/calculateButton";
import {FormsModule} from "@angular/forms";
import {CalculateService} from "./service/calculateService";
import {CountryAutocomplete} from "./component/countryAutocomplete/countryAutocomplete";
import {HttpClientModule} from "@angular/common/http";
import {DailySalary} from "./component/dailySalary/dailySalary";


@NgModule({
  declarations: [
    Calculator,
    CalculateButton,
    CountryAutocomplete,
    DailySalary
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    CalculateService
  ],
  bootstrap: [Calculator]
})
export class AppModule { }
