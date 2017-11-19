import {EventEmitter, Injectable} from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class CalculateService {
  constructor(private http: HttpClient) {}
  event: EventEmitter<any> = new EventEmitter();
  code: any;
  salary: any;
  resultSalary: any = 0;

  setCode(code){
    this.code = code;
  }

  setSalary(salary){
    this.salary = salary;
  }

  getCalculatedSalary() {
    if(this.salary <= 0){
      window.alert("Wartość w polu 'Wynagrodzenie' musi być większa od 0!")
    } else {
      this.http.get('./getRates?code=' + this.code
        + '&salary=' + this.salary)
        .subscribe(
          data => {
            this.resultSalary = data;
            if(this.resultSalary < 0) {
              window.alert("Na tym kontrakcie nic nie zarobisz!\n Wprowadź większe wynagrodzenie")
            } else {
              this.event.emit(this.resultSalary);
            }
          }
        )
    }
  }
}
