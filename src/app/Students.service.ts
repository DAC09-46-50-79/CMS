import { Student } from './Shared/Models/Student.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class Students{

    constructor(private http: HttpClient){}

    getStudent(Stud_ID: number):Observable<Student>{
        return this.http.get<Student>("https://localhost:44327/api/Students/"+Stud_ID);
    }

    updateStudent(Stud_ID: number, updatedStudent: Student):Observable<any>{
        return this.http.put<any>("https://localhost:44327/api/Students/"+Stud_ID, updatedStudent);
    }

    updatePW(Stud_ID: number, updatedStudent: Student):Observable<number>{
        return this.http.put<number>("https://localhost:44327/api/StudentCreds/"+Stud_ID, updatedStudent);
    }

    validatePass(comingStud: Student):Observable<number>{
        return this.http.post<number>("https://localhost:44327/api/StudentCreds", comingStud);
    }
}