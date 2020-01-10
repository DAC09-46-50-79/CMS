import { Injectable } from '@angular/core';
import { Menu } from './Models/menu.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }


  upload(menu: Menu):Observable<any>{
    return this.http.post<any>("https://localhost:44327/api/menus/", menu);
  }

  get(date: string):Observable<Menu>{
    return this.http.get<Menu>("https://localhost:44327/api/menus/"+date);
  }


}
