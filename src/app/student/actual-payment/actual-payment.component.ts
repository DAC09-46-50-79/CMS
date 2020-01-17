import { Students } from './../../Students.service';
import { PaymentService } from 'src/app/paymentdata.service';
import { DatePipe } from '@angular/common';
import { Validation } from './../../Shared/Validation.service';
import { AllPayments } from './../../Shared/Models/AllPayments.model';
import { ToastrService } from './../../Shared/toastr.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { __assign } from 'tslib';
import { Student } from 'src/app/Shared/Models/Student.model';

@Component({
  selector: 'app-actual-payment',
  templateUrl: './actual-payment.component.html',
  styleUrls: ['./actual-payment.component.css']
})
export class ActualPaymentComponent implements OnInit {
  isCCEnabled: boolean;
  isDCEnabled: boolean;
  isUPIEnabled: boolean;
  isWalletEnabled: boolean;
  currentPath: number;
  payment: AllPayments;
  todayDate: string;
  currentStud: Student;

  constructor(private route: ActivatedRoute, private toastrSer: ToastrService, private validationSer: Validation, private datepipe: DatePipe, private paymentService: PaymentService, private studentSer: Students) { 
    this.isCCEnabled = false;
    this.isDCEnabled = false;
    this.isUPIEnabled = false;
    this.isWalletEnabled = false;
    this.payment = new AllPayments();
    this.currentStud = new Student();
  }

  ngOnInit() {
    this.currentPath = Number(this.route.snapshot.params['id']);  
    this.route.params.subscribe(
      (params: Params)=>{
        this.currentPath = params['id'];
        this.assign();
      }
    );
    this.assign();

    let currentDate = new Date();
    this.todayDate = this.datepipe.transform(currentDate, 'yyyy-MM-dd');
  }

  pay(){
      this.payment.Stud_ID = this.validationSer.currentStudent;
      this.payment.Date = this.todayDate;
      this.payment.Payment_ID = this.generatePaymentID();

      //determining the payment type from the current path
      if(this.currentPath == 1){
        this.payment.Payment_Type = "Credit Card";
      }
      else if(this.currentPath == 2){
        this.payment.Payment_Type = "Debit Card";
      }
      else if(this.currentPath == 3){
        this.payment.Payment_Type = "UPI";
      }
      else if(this.currentPath == 4){
        this.payment.Payment_Type = "Wallet";
      }

      this.payment.Amount = this.paymentService.paymentAmount;
      this.paymentService.postPayment(this.payment).subscribe(
        (data)=>{
          if(data == null){

          }
          else{
            this.studentSer.getStudent(this.validationSer.currentStudent).subscribe(
              (data)=>{
                this.currentStud = data;
                this.updateBalance();
              }
            );
          }
        }
      );
   }

  //function to update the wallet balance of the student after payment
  updateBalance(){
    this.currentStud.Wallet_Bal += this.payment.Amount;
    this.studentSer.updateStudent(this.validationSer.currentStudent, this.currentStud).subscribe(
      (data)=>{
        setTimeout(()=>{
          this.toastrSer.Success("Payment Successful!", "Thank you");
        }, 1250); 
      }
    );
  };

  assign(){
    if(this.currentPath == 1){
      this.isCCEnabled = true;
      this.isDCEnabled = false;
      this.isUPIEnabled = false;
      this.isWalletEnabled = false;
    }
    else if(this.currentPath == 2){
      this.isDCEnabled = true;
      this.isCCEnabled = false;
      this.isUPIEnabled = false;
      this.isWalletEnabled = false;
    }
    else if(this.currentPath == 3){
      this.isUPIEnabled = true;
      this.isDCEnabled = false;
      this.isCCEnabled = false;
      this.isWalletEnabled = false;
    }
    else if(this.currentPath == 4){
      this.isWalletEnabled = true;
      this.isUPIEnabled = false;
      this.isDCEnabled = false;
      this.isCCEnabled = false;
    }
  }

  //generates a random string of 10 characters 
  generatePaymentID() {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < 10; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
}
