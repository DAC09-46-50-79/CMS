import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
  canEdit: boolean;

  constructor() { 
    this.canEdit = false;
  }

  ngOnInit() {
  }

  enableStudentEdit()
  {
    this.canEdit = true;
  }
}
