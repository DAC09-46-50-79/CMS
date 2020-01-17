import { PaymentService } from 'src/app/paymentdata.service';
import { AllPayments } from './../../Shared/Models/AllPayments.model';
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-admin-payment',
  templateUrl: './admin-payment.component.html',
  styleUrls: ['./admin-payment.component.css']
})
export class AdminPaymentComponent implements OnInit {

  stud_ID: number;
  month: string;
  monthText: string;
  allStudentPayment: AllPayments[];
  allPaymentInMonthOfStud: AllPayments[];

  constructor(private paymentService: PaymentService, private datepipe: DatePipe) { 
    this.allStudentPayment = [];
    this.allPaymentInMonthOfStud = [];
  }

  ngOnInit() {
    this.paymentService.getAllPayments().subscribe(
      (data)=>{
        this.allStudentPayment = data;
      }
    );
  }

  showRes(){
      this.allPaymentInMonthOfStud = [];
      this.allStudentPayment.forEach(payment => {
      let dateString: string = payment.Date;
      let date = new Date(dateString);
      let parsedDate = this.datepipe.transform(date, 'M');

      if(payment.Stud_ID == this.stud_ID && parsedDate == this.month){
        this.allPaymentInMonthOfStud.push(payment);
      }
    });
    this.refreshMonth();
  }

  refreshMonth(){
    switch(this.month){
      case "1": this.monthText = "January";
      break;
      case "2": this.monthText = "February";
      break;
      case "3": this.monthText = "March";
      break;
      case "4": this.monthText = "April";
      break;
      case "5": this.monthText = "May";
      break;
      case "6": this.monthText = "June";
      break;
      case "7": this.monthText = "July";
      break;
      case "8": this.monthText = "August";
      break;
      case "9": this.monthText = "September";
      break;
      case "10": this.monthText = "October";
      break;
      case "11": this.monthText = "November";
      break;
      case "12": this.monthText = "December";
      break;
    }
  }

}
