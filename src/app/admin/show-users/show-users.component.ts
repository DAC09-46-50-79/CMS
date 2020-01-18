import { Students } from './../../Students.service';
import { Student } from './../../Shared/Models/Student.model';
import { RegisterFood } from './../../RegisterFood.service';
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Food } from 'src/app/Shared/Models/food.model';

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUsersAdminComponent implements OnInit {
  todayDate: string;
  allStudents: Food[];
  interestedStudID: number[];
  studentArr: Student[];
  sortedStudArr: Student[];
  tempArr: Student[];

  constructor(private datepipe: DatePipe, private register: RegisterFood, private studentSer: Students) { 
    let currentDate = new Date();
    this.todayDate = datepipe.transform(currentDate, 'yyyy-MM-dd');
    this.allStudents = [];
    this.interestedStudID = [];
    this.studentArr = [];
    this.tempArr = [];
  }

  ngOnInit() {
    this.register.getAllStudents().subscribe(
      (data)=>{
        let index = 0;
        for(let i = 0; i < data.length; i++){
          let tempDate = this.datepipe.transform(data[i].Date, 'yyyy-MM-dd');
          if(tempDate == this.todayDate){
            this.allStudents[index++] = data[i];
          }
        }
      }
    );
  }

  generateList(value: string){
    this.interestedStudID = [];
    this.studentArr = [];
    switch(value){
      case 'breakfast': 
        this.allStudents.forEach((stud)=>{
          if(stud.Breakfast == 1){
            this.interestedStudID.push(stud.Stud_ID);
          }
        });
      break;
      case 'lunch':
        this.allStudents.forEach((stud)=>{
          if(stud.Lunch == 1){
            this.interestedStudID.push(stud.Stud_ID);
          }
        });
      break;
      case 'snacks':
        this.allStudents.forEach((stud)=>{
          if(stud.Snacks == 1){
            this.interestedStudID.push(stud.Stud_ID);
          }
        });
      break;
      case 'teacoffee':
        this.allStudents.forEach((stud)=>{
          if(stud.TeaCoffee == 1){
            this.interestedStudID.push(stud.Stud_ID);
          }
        });
      break;
      case 'teacoffeeE':
        this.allStudents.forEach((stud)=>{
          if(stud.TeaCoffeeE == 1){
            this.interestedStudID.push(stud.Stud_ID);
          }
        });
      break;
    }
    this.interestedStudID.forEach(
      (studentID)=>{
      this.studentSer.getStudent(studentID).subscribe(
        (data)=>{
          this.studentArr.push(data);
        }
      );
    });

    this.sortedStudArr = this.studentArr.sort((obj1, obj2) => {
      if (obj1.Stud_ID < obj2.Stud_ID) {
          return 1;
      }
      if (obj1.Stud_ID > obj2.Stud_ID) {
        return -1;
      }
    });
    this.tempArr = this.sortedStudArr;
  }

  searchStud(ID: HTMLInputElement){
    var Stud_ID = +(ID.value);
    var flag: boolean = false;
    var resStud: Student;
    this.sortedStudArr = this.tempArr;
    
    if(!Stud_ID){
      this.sortedStudArr = this.tempArr;
    }
    else{
      this.sortedStudArr.forEach(
        (student)=>{
          if(student.Stud_ID == Stud_ID){
            flag = true;
            resStud = student;
          }
        }
      )
      if(flag){
        this.sortedStudArr = [];
        this.sortedStudArr.push(resStud);
      }
    }
  }
}
