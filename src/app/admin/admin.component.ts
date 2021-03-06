import { ToastrService } from './../Shared/toastr.service';
import { Validation } from './../Shared/Validation.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private validation: Validation, private router: Router, private toastrSer: ToastrService) { }

  ngOnInit() {
  }

  loginAdmin(form) {
    let adID = Number(form.value.adminID);
    let adPass = form.value.adminPass;

    this.validation.validateAdmin(adID, adPass).then(
      (data: number)=>{
        if (data) {
          this.router.navigate(["/adminLogged"]);
        } else {
          this.toastrSer.Error("Incorrect ID or password!", "Invalid Credentials");
        }
      }
    );
  }
  
}
