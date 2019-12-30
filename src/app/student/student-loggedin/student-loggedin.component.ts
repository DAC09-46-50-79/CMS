import { Component, OnInit } from '@angular/core';
import { Food } from 'src/app/Shared/Models/food.model';

@Component({
  selector: 'app-student-loggedin',
  templateUrl: './student-loggedin.component.html',
  styleUrls: ['./student-loggedin.component.css']
})
export class StudentLoggedinComponent implements OnInit {
  food: Food;
  walletBalance: number;
  breakfastCB: boolean;
  
  constructor() {
    this.walletBalance = 500;
  }

  ngOnInit() {
  }

  registerFood(){
    // var allCheckBoxes = document.getElementsByClassName('checkboxInp');
    // for(var i = 0; i < allCheckBoxes.length; i++){
    //   if(document.querySelector('allCheckBoxes[i]').){

    //   }
    // }
    if(this.breakfastCB === true){
      alert("jsdkhjk");
    }
  }
}
