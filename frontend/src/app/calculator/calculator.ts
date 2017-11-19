import {Component} from '@angular/core';
import {CalculateService} from "./service/calculateService";

@Component({
  selector: 'calculator',
  templateUrl: './calculator.html',
  styleUrls: ['./calculator.css']
})

export class Calculator {
  title = 'Witaj w kalkulatorze zarobków B2B';
  monthlySalary = 'Kontrakt miesięcznie:';
  salary: any;

  constructor(private calculateService:CalculateService){
    this.salary = 0;
    this.setSalary();
  }

  setSalary(){
    this.calculateService.setSalary(this.salary);
  }
}
