import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  loggedInStatus: boolean;

  constructor() { }

  ngOnInit() {
    this.loggedInStatus = false;
  }

}
