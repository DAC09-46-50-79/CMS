import { ToastrService } from './../../Shared/toastr.service';
import { MenuService } from './../../Shared/menu.service';
import { Menu } from './../../Shared/Models/menu.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmupload-menu',
  templateUrl: './cmupload-menu.component.html',
  styleUrls: ['./cmupload-menu.component.css'],
  providers: [MenuService]
})
export class CMUploadMenuComponent implements OnInit {
  today: Date;
  breakfast: string;
  lunch: string;
  snacks: string;

  constructor(private ser: MenuService, private toastr: ToastrService) { 
    this.today = new Date();
  }

  ngOnInit() {
  }

  uploadMenu(){
    let newMenu = new Menu();
    newMenu.Date = this.today;
    newMenu.Breakfast = this.breakfast;
    newMenu.Lunch = this.lunch;
    newMenu.Snacks = this.snacks;

    this.ser.upload(newMenu).subscribe(data=>{
      this.toastr.Success("Menu uploaded!", "Done");
      this.breakfast = null;
      this.lunch = null;
      this.snacks = null;
    });
  }

}
