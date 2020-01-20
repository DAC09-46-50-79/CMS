import { ToastrService } from './../../Shared/toastr.service';
import { Validation } from './../../Shared/Validation.service';
import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/Shared/Models/Student.model';
import { ActivatedRoute } from '@angular/router';
import { Students } from 'src/app/Students.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
  canEdit: boolean;
  currentStudID: number;
  currName: string;
  currID: number;
  currEmail: string;
  currPhone: number;
  currPW: string;
  updatedStud: Student;

  constructor(private studentSer: Students, private validation: Validation, private toastr: ToastrService) { 
    this.canEdit = false;
    this.updatedStud = new Student();
  }

  ngOnInit() {
    this.currentStudID = this.validation.currentStudent;
    this.studentSer.getStudent(this.currentStudID).subscribe(
      (data)=>{
        this.currName = data.Stud_Name;
        this.currID = data.Stud_ID;
        this.currEmail = data.Email_ID;
        this.currPhone = data.Phone_Num;
        this.currPW = data.PasswordTXT;
      }
    );
  }

  enableStudentEdit()
  {
    this.canEdit = true;
  }

  updateStud(){
    this.updatedStud.Email_ID = this.currEmail;
    this.updatedStud.PasswordTXT = this.currPW;
    this.updatedStud.Phone_Num = this.currPhone;

    this.studentSer.getStudent(this.currID).subscribe(
      (data)=>{
        this.updatedStud.Stud_ID = data.Stud_ID;
        this.updatedStud.Stud_Name = data.Stud_Name;
        this.updatedStud.Course = data.Course;
        this.updatedStud.Wallet_Bal = data.Wallet_Bal;
        this.UpdateStudData();
      }
    );
  }

  UpdateStudData(){
    this.studentSer.updateStudent(this.currID, this.updatedStud).subscribe(
      (data)=>{
        this.toastr.Success("Data Updated Successfully!");
        this.updateStudPW();
      }
    );
  }

  updateStudPW(){
    this.studentSer.updatePW(this.currID, this.updatedStud).subscribe(
      (data)=>{
        if(data){
          this.toastr.Success("Data Updated Successfully!");
        }
        else{
          this.toastr.Error("Some error occured while updating");
        }
      }
    );
  }
}
