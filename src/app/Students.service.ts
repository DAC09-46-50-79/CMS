import { Student } from './Shared/Models/Student.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class Students{

    constructor(private http: HttpClient){}

    getStudent(Stud_ID: number):Observable<Student>{
        return this.http.get<Student>("https://localhost:44327/api/Students/"+Stud_ID);
    }
}