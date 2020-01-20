import { Validation } from './../../Shared/Validation.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-canteen-nav-bar',
  templateUrl: './canteen-nav-bar.component.html',
  styleUrls: ['./canteen-nav-bar.component.css']
})
export class CanteenNavBarComponent implements OnInit {

  constructor(private validation: Validation) { }

  ngOnInit() {
  }

  logoutCM(){
    this.validation.isCMLoggedIn = false;
    this.validation.currentCM = 0;
  }
}
