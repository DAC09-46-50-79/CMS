import { StudentValidation } from './student/studentvalidation.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StudentValidation]
})
export class AppComponent {
  isLoggedIn: boolean;
  studID: number;
  studPass: string;

  constructor(private studentvalidation: StudentValidation, private router: Router){
    this.isLoggedIn = false;
  }

  validateStudent(){
    this.isLoggedIn = this.studentvalidation.validate(this.studID, this.studPass);
    if(this.isLoggedIn){
      this.router.navigate(['/student']);
    }
  }
}
