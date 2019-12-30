import { Payment } from './../../Shared/payment.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css'],
  providers: [Payment]
})
export class PaymentFormComponent implements OnInit {
  amount: number;
  constructor(private paymentService: Payment) { 
    this.amount = this.paymentService.paymentAmount;
  }

  ngOnInit() {
  }



}
