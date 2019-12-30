import { Payment } from './../../Shared/payment.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-amt',
  templateUrl: './payment-amt.component.html',
  styleUrls: ['./payment-amt.component.css'],
  providers: [Payment]
})
export class PaymentAmtComponent implements OnInit {

  constructor(private router: Router, private paymentService: Payment) { }

  ngOnInit() {
  }

  proceedToPay(amount: HTMLInputElement){
    this.paymentService.paymentAmount = Number(amount.value);
    console.log(amount);
    this.router.navigate(['/paymentform']);
  }
}
