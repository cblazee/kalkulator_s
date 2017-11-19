import {Component, forwardRef} from '@angular/core';
import {CalculateService} from "../../service/calculateService";

@Component({
  selector: 'calculateButton',
  templateUrl: './calculateButton.html',
  styleUrls: ['./calculateButton.css']
})

export class CalculateButton{
  constructor(private calculateService:CalculateService
    ){}

  calculate = 'Przelicz';

  onClick() {
    this.calculateService.getCalculatedSalary();
  }
}
