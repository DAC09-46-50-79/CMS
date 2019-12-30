export class Validation{
    isStudentLoggedIn: boolean;
    isAdminLoggedIn: boolean;
    isCMLoggedIn: boolean;

    constructor(){
        this.isStudentLoggedIn = false;
        this.isAdminLoggedIn = false;
        this.isCMLoggedIn = false;
    }

    validateStudent(studID: number, studPass: string){
        if(studID == 1 && studPass == 'admin'){
            this.isStudentLoggedIn  = true;
        }
    }

    validateAdmin(adminID: number, adminPass: string){
        if(adminID == 1 && adminPass == 'admin'){
            this.isAdminLoggedIn  = true;
        }
    }

    validateCM(CMID: number, CMPass: string){
        if(CMID == 1 && CMPass == 'admin'){
            this.isCMLoggedIn  = true;
        }
    }
}