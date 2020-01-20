import { ToastrService } from './../Shared/toastr.service';
import { Validation } from './../Shared/Validation.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private validation: Validation, private router: Router, private toastrSer: ToastrService) { }

  ngOnInit() {

  }

  loginStudent(form) {
    let studentID = +(form.value.studID);
    let studentPass = form.value.password;
    let output = this.validation.validateStudent(studentID, studentPass);
    console.log("output"+output)
    // if (output) {
    //   this.router.navigate(["/studentLogged"]);
    // } else {
    //   this.toastrSer.Error("Incorrect ID or password!", "Invalid Credentials");
    // }
  }
}
