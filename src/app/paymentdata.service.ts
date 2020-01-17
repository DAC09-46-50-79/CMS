import { Validation } from './Shared/Validation.service';
import { Students } from './Students.service';
import { HttpClient } from '@angular/common/http';
import { AllPayments } from './Shared/Models/AllPayments.model';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './Shared/Models/Student.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentService implements OnInit{

  paymentAmount: number;
  walletBalance: number;

  constructor(private http: HttpClient, private studentSer: Students, private validation: Validation) { 
   }

  ngOnInit(){
    this.walletBalance += this.paymentAmount;
    console.log("Wallet= " +this.walletBalance);
  }

  postPayment(payment: AllPayments):Observable<AllPayments>{
    return this.http.post<AllPayments>("https://localhost:44327/api/AllPayments", payment);
  }

  getAllPayments():Observable<AllPayments[]>{
    return this.http.get<AllPayments[]>("https://localhost:44327/api/AllPayments");
  }

}
