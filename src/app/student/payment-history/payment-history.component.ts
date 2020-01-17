import { Validation } from './../../Shared/Validation.service';
import { PaymentService } from 'src/app/paymentdata.service';
import { AllPayments } from './../../Shared/Models/AllPayments.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-history',
  templateUrl: './payment-history.component.html',
  styleUrls: ['./payment-history.component.css']
})
export class PaymentHistoryComponent implements OnInit {

  allPayments: AllPayments[];
  allPaymentOfStud: AllPayments[];

  constructor(private paymentService: PaymentService, private validation: Validation) { 
   
  }

  ngOnInit() {
    this.allPayments = [];
    this.allPaymentOfStud = [];

    this.paymentService.getAllPayments().subscribe(
      (data)=>{
        for(let i = 0; i < data.length; i++){
          this.allPayments[i] = data[i];
        }
        this.populateArr();
      }
    );
  }

  populateArr(){
    for(let i= 0; i < this.allPayments.length; i++){
      if(this.allPayments[i].Stud_ID == this.validation.currentStudent){
        this.allPaymentOfStud.push(this.allPayments[i]);
      }
    }
  }
}
