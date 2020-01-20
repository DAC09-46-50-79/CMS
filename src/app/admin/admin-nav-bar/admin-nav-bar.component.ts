import { Validation } from './../../Shared/Validation.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-nav-bar',
  templateUrl: './admin-nav-bar.component.html',
  styleUrls: ['./admin-nav-bar.component.css']
})
export class AdminNavBarComponent implements OnInit {

  constructor(private validation: Validation) { }

  ngOnInit() {
  }

  logoutAdmin(){
    this.validation.isAdminLoggedIn = false;
    this.validation.currentAdmin = 0;
  }

}
