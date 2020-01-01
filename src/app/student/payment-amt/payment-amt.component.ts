import { Payment } from './../../Shared/payment.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Form } from '@angular/forms';

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

  proceedToPay(form){
    this.paymentService.paymentAmount = +(form.value.amt);
    this.router.navigate(['/paymentform']);
  }
}