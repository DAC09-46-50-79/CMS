export class Validation{
    isStudentLoggedIn: boolean;
    isAdminLoggedIn: boolean;
    isCMLoggedIn: boolean;

    currentStudent: number;
    currentAdmin: number;
    currentCM: number;

    constructor(){
        this.isStudentLoggedIn = false;
        this.isAdminLoggedIn = false;
        this.isCMLoggedIn = false;
    }

    validateStudent(studID: number, studPass: string){
        console.log(studID+" "+ studPass);
        if(studID == 1 && studPass == 'admin'){
            this.isStudentLoggedIn  = true;
            this.currentStudent = studID;
        }
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