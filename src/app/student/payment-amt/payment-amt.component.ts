import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentService } from 'src/app/paymentdata.service';


@Component({
  selector: 'app-payment-amt',
  templateUrl: './payment-amt.component.html',
  styleUrls: ['./payment-amt.component.css']
})
export class PaymentAmtComponent implements OnInit {

  constructor(private router: Router, private paymentService: PaymentService) { }

  ngOnInit() {
  }

  proceedToPay(form){
    this.paymentService.paymentAmount = +(form.value.amt);
    this.router.navigate(['/paymentform']);
  }
}