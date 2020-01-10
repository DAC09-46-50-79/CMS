import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/Shared/menu.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css']
})
export class AdminMenuComponent implements OnInit {
  todayDate: string;

  breakfastArr: string[];
  lunchArr: string[];
  snacksArr: string[];
  largestArr: string[];

  constructor(private ser: MenuService, private datapipe: DatePipe) { 
    let currentDate = new Date();
    this.todayDate = this.datapipe.transform(currentDate, 'yyyy-MM-dd');
    this.largestArr = [];
  }

  ngOnInit() {
    this.ser.get(this.todayDate).subscribe(
      (data) =>{
      
        this.breakfastArr = data.Breakfast.split(',');
        this.lunchArr = data.Lunch.split(',');
        this.snacksArr = data.Snacks.split(',');

        this.largestArr = this.max(this.breakfastArr, this.lunchArr, this.snacksArr);
      }
    );
  }
  
  max(arr1: string[], arr2: string[], arr3: string[]){
    if (arr1.length >= arr2.length && arr1.length >= arr3.length) {
      return arr1;
    }
    else if (arr2.length >= arr1.length && arr2.length >= arr3.length) {
      return arr2;
    }
    else
        return arr3;
  }
}
