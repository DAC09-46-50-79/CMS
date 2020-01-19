import { ToastrService } from './../../Shared/toastr.service';
import { Students } from './../../Students.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/Shared/Models/Student.model';

@Component({
  selector: 'app-all-student-edit',
  templateUrl: './all-student-edit.component.html',
  styleUrls: ['./all-student-edit.component.css']
})
export class AllStudentEditComponent implements OnInit {

  currentStudID: number;
  currName: string;
  currID: number;
  currEmail: string;
  currPhone: number;
  currPW: string;
  canEdit: boolean;
  updatedStud: Student;

  constructor(private route: ActivatedRoute, private studentSer: Students, private toastr: ToastrService) { 
    this.canEdit = false;
    this.updatedStud = new Student();
  }

  ngOnInit() {
    this.currentStudID = this.route.snapshot.params['id'];
    this.studentSer.getStudent(this.currentStudID).subscribe(
      (data)=>{
        this.currName = data.Stud_Name;
        this.currID = data.Stud_ID;
        this.currEmail = data.Email_ID;
        this.currPhone = data.Phone_Num;
        this.currPW = data.Password;
      }
    );
  }

  enableAdminEdit(){
    this.canEdit = true;
  }

  updateStud(){
    this.updatedStud.Stud_ID = this.currID;
    this.updatedStud.Stud_Name = this.currName;
    this.updatedStud.Email_ID = this.currEmail;
    this.updatedStud.Password = this.currPW;
    this.updatedStud.Phone_Num = this.currPhone;

    this.studentSer.getStudent(this.currID).subscribe(
      (data)=>{
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
      }
    );
  }
}
