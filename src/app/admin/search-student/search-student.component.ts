import { Router } from '@angular/router';
import { ToastrService } from './../../Shared/toastr.service';
import { Students } from './../../Students.service';
import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/Shared/Models/Student.model';

@Component({
  selector: 'app-search-student',
  templateUrl: './search-student.component.html',
  styleUrls: ['./search-student.component.css']
})
export class SearchStudentComponent{

  resStud: Student;
  showTable: boolean;
  
  constructor(private studentSer: Students, private toastr: ToastrService, private router: Router) {
    this.resStud = new Student();
    this.showTable = false;
   }

  searchStud(htmlElement : HTMLInputElement){
    this.studentSer.getStudent(+(htmlElement.value)).subscribe(
      (data)=>{
        this.resStud = data;
        this.showTable = true;
      },
      (error)=>{
        if(error.status == 404){
          this.toastr.Error("Student not found!");
          this.showTable = false;
        }
      }
    );
  }

  navigateToEdit(){
    this.router.navigate(['/allEditStud/'+this.resStud.Stud_ID]);
  }
}
