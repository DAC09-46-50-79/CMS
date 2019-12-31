import { ToastrService } from './../Shared/toastr.service';
import { Component, OnInit } from '@angular/core';
import { Validation } from '../Shared/Validation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-canteen-manager',
  templateUrl: './canteen-manager.component.html',
  styleUrls: ['./canteen-manager.component.css'],
  providers: [Validation]

})
export class CanteenManagerComponent implements OnInit {

  constructor(private validation: Validation, private router: Router, private toastrServ: ToastrService) { }
  loggedInStatus: boolean;
  ngOnInit() {
    

  }

  
  validateCM(CMID:HTMLInputElement,CMPass:HTMLInputElement){
    let cmID = Number(CMID.value);
    let cmPass = CMPass.value;
    this.validation.validateCM(cmID, cmPass);
    if(this.validation.isCMLoggedIn){
      this.router.navigate(['/CMLogged']);
    }
    else{
      this.toastrServ.failedLogin("Incorrect ID or password", "Invalid Credentials");
    }
  }
}
