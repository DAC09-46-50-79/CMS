import { ToastrService } from './../Shared/toastr.service';
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

  constructor(private validation: Validation, private router: Router, private toastrSer: ToastrService) { }

  ngOnInit() {
    this.loggedInStatus = false;
  }

  loginStudent(form) {
    console.log(form);
    console.log(form.value);
    let studentID = Number(form.value.studID);
    let studentPass = form.value.password;
    this.validation.validateStudent(studentID, studentPass);
    if (this.validation.isStudentLoggedIn) {
      this.router.navigate(["/studentLogged"]);
    } else {
      this.toastrSer.failedLogin("Incorrect ID or password!", "Invalid Credentials");
    }
  }
}
