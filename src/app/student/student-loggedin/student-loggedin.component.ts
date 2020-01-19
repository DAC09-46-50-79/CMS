import { ExpensesService } from './../expenses.service';
import { Expense } from './../../Shared/Models/Expense.model';
import { Students } from './../../Students.service';
import { PaymentService } from 'src/app/paymentdata.service';
import { RegisterFood } from './../../RegisterFood.service';
import { Validation } from './../../Shared/Validation.service';
import { ToastrService } from './../../Shared/toastr.service';
import { Component, OnInit } from "@angular/core";
import { Food } from "src/app/Shared/Models/food.model";
import { DatePipe } from '@angular/common';
import { Student } from 'src/app/Shared/Models/Student.model';

@Component({
  selector: "app-student-loggedin",
  templateUrl: "./student-loggedin.component.html",
  styleUrls: ["./student-loggedin.component.css"]
})
export class StudentLoggedinComponent implements OnInit {
  food: Food;
  walletBalance: number;
  todayDate: string;
  monthString: string;
  updatedExpense: Expense;
  currentStud: Student;

  constructor(private toastrSer: ToastrService, private validation: Validation, private datepipe: DatePipe, private register: RegisterFood, private paymentService: PaymentService, private studentSer: Students, private expenseSer: ExpensesService) {

    this.getWalletBalance();

    this.food = new Food();

    let currentDate = new Date();
    this.todayDate = this.datepipe.transform(currentDate, 'yyyy-MM-dd');
    this.currentStud = new Student();
  }

  ngOnInit() {
    let todayDate = new Date();
    let currentDate = this.datepipe.transform(todayDate, 'M');

    if(currentDate == "1"){
      this.monthString = "January";
    }
    else if(currentDate == "2"){
      this.monthString = "February";
    }
    else if(currentDate == "3"){
      this.monthString = "March";
    }
    else if(currentDate == "4"){
      this.monthString = "April";
    }
    else if(currentDate == "5"){
      this.monthString = "May";
    }
    else if(currentDate == "6"){
      this.monthString = "June";
    }
    else if(currentDate == "7"){
      this.monthString = "July";
    }
    else if(currentDate == "8"){
      this.monthString = "August";
    }
    else if(currentDate == "9"){
      this.monthString = "September";
    }
    else if(currentDate == "10"){
      this.monthString = "October";
    }
    else if(currentDate == "11"){
      this.monthString = "November";
    }
    else{
      this.monthString = "December";
    }

    this.getExpenses();
  }

  getWalletBalance(){
    this.studentSer.getStudent(this.validation.currentStudent).subscribe(
      (data)=>{
        this.walletBalance = data.Wallet_Bal;
      }
    );
  }

  registerFood(form) {
    let flag = 1;
    this.food.Breakfast = form.value.breakfastCB == true ? 1: 0;
    this.food.Lunch = form.value.lunchCB  == true ? 1: 0;
    this.food.TeaCoffee = form.value.teacoffeeCB  == true ? 1: 0;
    this.food.TeaCoffeeE = form.value.teacoffeeECB  == true ? 1: 0;
    this.food.Snacks = form.value.snacksCB == true ? 1: 0;
    this.food.Stud_ID = this.validation.currentStudent;

    let currentHour = +(this.datepipe.transform(new Date(), 'HH'));
    if(currentHour >= 18 && currentHour <= 0){
      //next day logic
      if(new Date().getDay() != 6){
        let nextDay: string = this.datepipe.transform((new Date().getDate() + 1), 'yyyy-MM-dd');
        this.food.Date = nextDay;
      }
      else{
        flag = 0;
      }
    } 
    else if(currentHour > 0 && currentHour <= 8 && (new Date().getDay()) != 0){
      this.food.Date = this.todayDate;
    }
    else{
      flag = 0;
    }
    if(flag == 1){
      if(this.calculateAmt()){
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
      else{
        this.toastrSer.Error("Insufficient wallet balance");
      }
      form.reset();
    }
    else{
      this.toastrSer.Error("Food registration will open after 6:00 PM");
    }
  }

  //calculating if the user has the suffiecient wallet balance
  calculateAmt(){ 
    let orderedAmt: number = 0;
    if(this.food.Breakfast){
      orderedAmt += 12;
    }
    if(this.food.Lunch){
      orderedAmt += 40;
    }
    if(this.food.Snacks){
      orderedAmt += 12;
    }
    if(this.food.TeaCoffee){
      orderedAmt += 6;
    }
    if(this.food.TeaCoffeeE){
      orderedAmt += 6;
    }

    if(orderedAmt <= this.walletBalance){
      this.getStudentAndUpdate(orderedAmt);
      this.updateExpenses();
      return true;
    }
    else{
      return false;
    }
  }

  getStudentAndUpdate(orderedAmt: number){
    this.studentSer.getStudent(this.validation.currentStudent).subscribe(
      (data)=>{
        if(data){
          this.currentStud = data;
          this.updateStudentBalance(orderedAmt);
        }
      }
    );
  };

  updateStudentBalance(orderedAmt: number){
    this.currentStud.Wallet_Bal -= orderedAmt;

    this.studentSer.updateStudent(this.validation.currentStudent, this.currentStud).subscribe(
      (data)=>{
        this.getWalletBalance();
      }
    );
  }

  updateExpenses(){
    if(this.food.Breakfast){
      this.updatedExpense.BF_Amount += 12;
    }
    if(this.food.Lunch){
      this.updatedExpense.Lunch_Amount += 40;
    }
    if(this.food.Snacks){
      this.updatedExpense.Snacks_Amount += 12;
    }
    if(this.food.TeaCoffee){
      this.updatedExpense.TeaCoffee_Amount += 6;
    }
    if(this.food.TeaCoffeeE){
      this.updatedExpense.TeaCoffee_Amount += 6;
    }

    this.expenseSer.updateExpense(this.updatedExpense.Stud_ID, this.updatedExpense.Month, this.updatedExpense).subscribe(
      (data)=>{
        if(data == null){
          // this.postExpense(this.updatedExpense);
        }
        else{
          console.log("updateExpense() done");
        }
      }
    );
  };

  postExpense(newExpense: Expense){
    this.expenseSer.postExpense(newExpense).subscribe(
      (data)=>{
        console.log(data);
      }
    );
  }

  getExpenses(){
    this.expenseSer.getExpense(this.validation.currentStudent, this.monthString).subscribe(
      (data)=>{
        if(data){
          this.updatedExpense= data;
        }
      },
      (err)=>{
        if(err.status == 404){
          this.postExpense(new Expense(this.validation.currentStudent, this.monthString));
          this.getExpenses();
        }
      }
    );
  };
}
