export class StudentValidation{

    validate(ID: number, pass: string){
        if(ID == 1 && pass == "admin"){
            return true;
        }
        else{
            return false;
        }
    }
}