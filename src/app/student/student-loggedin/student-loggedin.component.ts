import { RegisterFood } from './../../RegisterFood.service';
import { Validation } from './../../Shared/Validation.service';
import { ToastrService } from './../../Shared/toastr.service';
import { Component, OnInit } from "@angular/core";
import { Food } from "src/app/Shared/Models/food.model";
import { DatePipe } from '@angular/common';

@Component({
  selector: "app-student-loggedin",
  templateUrl: "./student-loggedin.component.html",
  styleUrls: ["./student-loggedin.component.css"],
  providers: [RegisterFood]
})
export class StudentLoggedinComponent implements OnInit {
  food: Food;
  walletBalance: number;
  todayDate: string;

  constructor(private toastrSer: ToastrService, private validation: Validation, private datapipe: DatePipe, private register: RegisterFood) {
    this.walletBalance = 500;
    this.food = new Food();
    let currentDate = new Date();
    this.todayDate = this.datapipe.transform(currentDate, 'yyyy-MM-dd');
  }

  ngOnInit() {}

  registerFood(form) {
    this.food.Breakfast = form.value.breakfastCB == true ? 1: 0;
    this.food.Lunch = form.value.lunchCB  == true ? 1: 0;
    this.food.TeaCoffee = form.value.teacoffeeCB  == true ? 1: 0;
    this.food.TeaCoffeeE = form.value.teacoffeeECB  == true ? 1: 0;
    this.food.Snacks = form.value.snacksCB == true ? 1: 0;
    this.food.Stud_ID = this.validation.currentStudent;
    this.food.Date = this.todayDate;

    this.register.registerFood(this.food).subscribe(
      (data)=>{
        if(data == null){
          this.toastrSer.Error("Some error occured!");
        }
        else{
          let str = "";
          if(this.food.Breakfast){
            str = str.concat("Breakfast ");
          }
          if(this.food.Lunch){
            str = str.concat("Lunch ");
          }
          if(this.food.Snacks){
            str += "Snacks ";
          }
          if(this.food.TeaCoffee){
            str += "Tea/Coffee ";
          }
          if(this.food.TeaCoffeeE){
            str += "Tea/Coffee(E) ";
          }
          this.toastrSer.Success(str, "Registered");
        }
      }
    );
  }
    
}
