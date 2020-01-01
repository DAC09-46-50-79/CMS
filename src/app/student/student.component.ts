import { ToastrService } from './../Shared/toastr.service';
import { Validation } from './../Shared/Validation.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  providers: [Validation]
})
export class StudentComponent implements OnInit {

  constructor(private validation: Validation, private router: Router, private toastrSer: ToastrService) { }

  ngOnInit() {

  }

  loginStudent(form) {
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
