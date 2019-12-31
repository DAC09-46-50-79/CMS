import { ToastrService } from './../../Shared/toastr.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { __assign } from 'tslib';

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

  constructor(private route: ActivatedRoute, private toastrSer: ToastrService) { 
    this.isCCEnabled = false;
    this.isDCEnabled = false;
    this.isUPIEnabled = false;
    this.isWalletEnabled = false;
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
  }

  pay(){
      this.toastrSer.paymentDone("Payment Successful!", "Thank you");
   }

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

}
