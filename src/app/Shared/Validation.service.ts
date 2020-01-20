import { Students } from 'src/app/Students.service';
import { Injectable } from '@angular/core';
import { Student } from './Models/Student.model';
import { Observable } from 'rxjs';


@Injectable({
    providedIn : 'root'
})
export class Validation{
    isStudentLoggedIn: boolean;
    isAdminLoggedIn: boolean;
    isCMLoggedIn: boolean;

    currentStudent: number;
    currentAdmin: number;
    currentCM: number;

    output: number;

    constructor(private studentSer: Students){
        this.isStudentLoggedIn = false;
        this.isAdminLoggedIn = false;
        this.isCMLoggedIn = false;
    }

    validateStudent(studID: number, studPass: string){
        let comingStud: Student;
        return new Promise(
            (resolve)=>{
                this.studentSer.getStudent(studID)
                .subscribe(
                    (data)=>{
                        comingStud = data;
                        comingStud.PasswordTXT = studPass;
                        this.checkStudPassword(comingStud)
                        .then(
                            (data: any)=>{
                                resolve(data);
                            }
                        );
                    }
                );
            }
        );
        
    }

    checkStudPassword(comingStud: Student){
        return new Promise(
            (resolve)=>{
                this.studentSer.validatePass(comingStud)
                .subscribe(
                    (data)=>{
                        resolve(data);
                    }
                );
            }
        );
    }

    validateAdmin(adminID: number, adminPass: string){
        if(adminID == 1 && adminPass == 'admin'){
            this.isAdminLoggedIn  = true;
            this.currentAdmin = adminID;
        }
    }

    validateCM(CMID: number, CMPass: string){
        if(CMID == 1 && CMPass == 'admin'){
            this.isCMLoggedIn  = true;
            this.currentCM = CMID;
        }
    }
}