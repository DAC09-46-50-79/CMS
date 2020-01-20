import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CMModel } from '../Shared/Models/CMModel.model';

@Injectable({
    providedIn: 'root'
})
export class CM{
    
    constructor(private http: HttpClient){}

    validatePass(comingCM: CMModel):Observable<number>{
        return this.http.post<number>("https://localhost:44327/api/CMCreds", comingCM);
    }
}