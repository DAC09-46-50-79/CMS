import { HttpClient } from '@angular/common/http';
import { Expense } from './../Shared/Models/Expense.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  constructor(private http: HttpClient) { }

  updateExpense(Stud_ID: number, month: string, updatedExpense: Expense):Observable<Expense>{
    return this.http.put<Expense>("https://localhost:44327/api/studentexpenses/"+Stud_ID+"/"+month, updatedExpense);
  }

  postExpense(newExpense: Expense):Observable<Expense>{
    return this.http.post<Expense>("https://localhost:44327/api/studentexpenses", newExpense);
  }

  getExpense(Stud_ID: number, month: string):Observable<Expense>{
    return this.http.get<Expense>("https://localhost:44327/api/studentexpenses/"+Stud_ID+"/"+month);
  }

  getAllExpense():Observable<Expense[]>{
    return this.http.get<Expense[]>("https://localhost:44327/api/studentexpenses/");
  }
}
