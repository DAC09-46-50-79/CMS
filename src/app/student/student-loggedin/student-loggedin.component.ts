import { ToastrService } from './../../Shared/toastr.service';
import { Component, OnInit } from "@angular/core";
import { Food } from "src/app/Shared/Models/food.model";

@Component({
  selector: "app-student-loggedin",
  templateUrl: "./student-loggedin.component.html",
  styleUrls: ["./student-loggedin.component.css"]
})
export class StudentLoggedinComponent implements OnInit {
  food: Food;
  walletBalance: number;

  constructor(private toastrSer: ToastrService) {
    this.walletBalance = 500;
    this.food = new Food();
  }

  ngOnInit() {}

  registerFood(form) {
    this.food.breakfast = form.value.breakfastCB;
    this.food.lunch = form.value.lunchCB;
    this.food.teaCoffee = form.value.teacoffeeCB;
    this.food.teaCoffeeE = form.value.teacoffeeECB;
    this.food.snacks = form.value.snacksCB;
    console.log(this.food);

    let str = "";
    if(this.food.breakfast){
      str = str.concat("Breakfast ");
      
    }
    if(this.food.lunch){
      str = str.concat("Lunch ");
    }
    if(this.food.snacks){
      str += "Snacks ";
    }
    if(this.food.teaCoffee){
      str += "Tea/Coffee ";
    }
    if(this.food.teaCoffeeE){
      str += "Tea/Coffee(E) ";
    }
    this.toastrSer.foodRegistered(str, "Registered");
  }
}
