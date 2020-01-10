import { Validation } from './Shared/Validation.service';
import { ToastrService } from './Shared/toastr.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Validation]
})
export class AppComponent {

  constructor(private toastrSer: ToastrService){
  }

}
