import { ToastrService } from './../Shared/toastr.service';
import { Component, OnInit } from '@angular/core';
import { Validation } from '../Shared/Validation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-canteen-manager',
  templateUrl: './canteen-manager.component.html',
  styleUrls: ['./canteen-manager.component.css']
})
export class CanteenManagerComponent implements OnInit {

  constructor(private validation: Validation, private router: Router, private toastrServ: ToastrService) { }
  loggedInStatus: boolean;
  ngOnInit() {
    

  }
  validateCM(form){
    let cmID = Number(form.value.cmID);
    let cmPass = form.value.password;
    this.validation.validateCM(cmID, cmPass);
    if(this.validation.isCMLoggedIn){
      this.router.navigate(['/CMLogged']);
    }
    else{
      this.toastrServ.Error("Incorrect ID or password", "Invalid Credentials");
    }
  }
}
