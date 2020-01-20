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

  constructor(private validation: Validation, private router: Router, private toastrSer: ToastrService) { }
  loggedInStatus: boolean;
  ngOnInit() {
    

  }
  validateCM(form){
    let cmID = Number(form.value.cmID);
    let cmPass = form.value.password;

    this.validation.validateCM(cmID, cmPass).then(
      (data: number)=>{
        if (data) {
          this.router.navigate(["/CMLogged"]);
        } else {
          this.toastrSer.Error("Incorrect ID or password!", "Invalid Credentials");
        }
      }
    );
  }
}
