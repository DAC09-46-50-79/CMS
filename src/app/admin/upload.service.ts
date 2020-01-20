import { Injectable } from '@angular/core';  
import { HttpHeaders } from '@angular/common/http';  
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })
  export class UploadService {
    constructor(private http: HttpClient) { }

    url = 'https://localhost:44327/Api/Excel';  
    UploadExcel(formData: FormData) {  
      let headers = new HttpHeaders();  
    
      headers.append('Content-Type', 'multipart/form-data');  
      headers.append('Accept', 'application/json');  
    
      const httpOptions = { headers: headers };  
    
      return this.http.post(this.url + '/UploadExcel', formData, httpOptions)  
    }
    
  }