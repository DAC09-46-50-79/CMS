import { CM } from './../canteen-manager/CM.service';
import { AdminModel } from './Models/Admin.model';
import { Admin } from './../admin/Admin.service';
import { Students } from 'src/app/Students.service';
import { Injectable } from '@angular/core';
import { Student } from './Models/Student.model';
import { CMModel } from './Models/CMModel.model';


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

    constructor(private studentSer: Students, private adminSer: Admin, private CMSer: CM){
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
                                this.isStudentLoggedIn = true;
                                this.currentStudent = comingStud.Stud_ID;
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
        let comingAdmin = new AdminModel();
        comingAdmin.Admin_ID = adminID;
        comingAdmin.PasswordTXT = adminPass;

        return new Promise(
            (resolve)=>{
                this.adminSer.validatePass(comingAdmin).subscribe(
                    (data)=>{
                        this.isAdminLoggedIn = true;
                        this.currentAdmin = comingAdmin.Admin_ID;
                        resolve(data);
                    }
                );
            }
        );
    }

    validateCM(CMID: number, CMPass: string){
        let comingCM = new CMModel();
        comingCM.CM_ID = CMID;
        comingCM.PasswordTXT = CMPass;

        return new Promise(
            (resolve)=>{
                this.CMSer.validatePass(comingCM).subscribe(
                    (data)=>{
                        this.isCMLoggedIn = true;
                        this.currentCM = comingCM.CM_ID
                        resolve(data);
                    }
                );
            }
        );
    }
}