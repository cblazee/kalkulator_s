import {Component } from "@angular/core";
import {CalculateService} from "../../service/calculateService";

@Component({
  selector: 'dailySalary',
  templateUrl: './dailySalary.html',
  styleUrls: ['./dailySalary.css']
})

export class DailySalary {
  plnDaily = "Stawka dzienna w PLN to: ";
  dailySalary: any = 0;

  constructor(private calculateService:CalculateService) {
  }

  ngOnInit() {
    this.calculateService.event.subscribe(
      (resultSalary) => {
        this.dailySalary = resultSalary;
      }
    );
  }
}
