import { Validation } from './../../Shared/Validation.service';
import { ExpensesService } from './../expenses.service';
import { Component, OnInit } from '@angular/core';
import { Expense } from 'src/app/Shared/Models/Expense.model';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  allExpenses: Expense[];
  expensesOfStud: Expense[];

  constructor(private expenseSer: ExpensesService, private validationSer: Validation) { 
    this.expensesOfStud = [];
  }

  ngOnInit() {
    this.expenseSer.getAllExpense().subscribe(
      (data)=>{
        this.allExpenses = data;
        this.generateList();
      }
    );
  }

  generateList(value: string = "January"){
    this.expensesOfStud = [];
    this.allExpenses.forEach(expense => {
      if((expense.Stud_ID === this.validationSer.currentStudent) && expense.Month === value){
        this.expensesOfStud.push(expense);
      }
    });
  }
}
