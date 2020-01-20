import { AdminModel } from './../Shared/Models/Admin.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class Admin{
    
    constructor(private http: HttpClient){}

    validatePass(comingAdmin: AdminModel):Observable<number>{
        return this.http.post<number>("https://localhost:44327/api/AdminCreds", comingAdmin);
    }
}