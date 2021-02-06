import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  regularPay = 0
  overtimePay = 0
  tax = 0
  totalPay = 0
  hrlyRate:number
  hrsWorked:number
  constructor() {}

  calculate(hrsWorked:number, hrlyRate:number){

    if (hrsWorked <= 40) {
      this.regularPay = hrsWorked * hrlyRate
      this.overtimePay = 0
      this.totalPay = this.regularPay + this.totalPay
    } else {
      this.regularPay = 40 * hrlyRate
      this.overtimePay = (hrsWorked-40)*hrlyRate*1.5 + 40*hrlyRate
      this.totalPay = this.regularPay + this.totalPay
    }
    this.tax = this.totalPay*0.18
  }

}
