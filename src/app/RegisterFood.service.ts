import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Food } from 'src/app/Shared/Models/food.model';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class RegisterFood{

    constructor(private http: HttpClient) {
    }

    registerFood(food: Food):Observable<Food>{
        return this.http.post<Food>("https://localhost:44327/api/registeredFoods", food);
    }

    getAllStudents():Observable<Food[]>{
        return this.http.get<Food[]>("https://localhost:44327/api/registeredFoods");
    }

}