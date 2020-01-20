import { Students } from 'src/app/Students.service';
import { Validation } from './../../Shared/Validation.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-nav-bar',
  templateUrl: './student-nav-bar.component.html',
  styleUrls: ['./student-nav-bar.component.css']
})
export class StudentNavBarComponent implements OnInit {

  studentName: string;
  
  constructor(private validation: Validation, private studentSer: Students) { }

  ngOnInit() {
    this.studentSer.getStudent(this.validation.currentStudent).subscribe(
      (data)=>{
        this.studentName = data.Stud_Name;
      }
    );
  }

  logoutStud(){
    this.validation.currentStudent = 0;
    this.validation.isStudentLoggedIn = false;
  }
}
