import { Validation } from './../Shared/Validation.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [Validation]
})
export class AdminComponent implements OnInit {

  constructor(private validation: Validation, private router: Router) { }

  ngOnInit() {
  }

  validateEmployee(adminID: HTMLInputElement, adminPass: HTMLInputElement){ 
    let adID = Number(adminID.value);
    let adPass = adminPass.value;
    this.validation.validateAdmin(adID, adPass);
    if(this.validation.isAdminLoggedIn){
      this.router.navigate(['/adminLogged']);
    }
  }
}
