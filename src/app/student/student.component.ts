import { Validation } from './../Shared/Validation.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  providers: [Validation]
})
export class StudentComponent implements OnInit {

  loggedInStatus: boolean;

  constructor(private validation: Validation, private router: Router) { }

  ngOnInit() {
    this.loggedInStatus = false;
  }

  validate(studID: HTMLInputElement, studPass: HTMLInputElement){
    let studentID = Number(studID.value);
    let studentPass = studPass.value;
    this.validation.validateStudent(studentID, studentPass);
    if(this.validation.isStudentLoggedIn){
      this.router.navigate(['/studentLogged']);
    }
    else{
      
    }
  }
}
