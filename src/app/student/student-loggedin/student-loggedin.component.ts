import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-loggedin',
  templateUrl: './student-loggedin.component.html',
  styleUrls: ['./student-loggedin.component.css']
})
export class StudentLoggedinComponent implements OnInit {
  walletBalance: number;
  
  constructor() {
    this.walletBalance = 500;
  }

  ngOnInit() {
  }

}
