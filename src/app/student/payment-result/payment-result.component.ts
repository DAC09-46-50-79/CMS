import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-result',
  templateUrl: './payment-result.component.html',
  styleUrls: ['./payment-result.component.css']
})
export class PaymentResultComponent implements OnInit {
  outcomeMsg: string;
  isSuccessful: boolean;

  constructor() {
    this.outcomeMsg = "Successful!";
    this.isSuccessful = true;
   }

  ngOnInit() {
  }

}
