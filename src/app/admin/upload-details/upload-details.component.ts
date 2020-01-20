import { Component, OnInit, ViewChild } from '@angular/core';
import { UploadService } from '../upload.service';

@Component({
  selector: 'app-upload-details',
  templateUrl: './upload-details.component.html',
  styleUrls: ['./upload-details.component.css']
})
export class UploadDetailsComponent implements OnInit {
  @ViewChild('fileInput', {static: false}) fileInput;  
  message: string; 

  constructor(private service: UploadService) { }

  ngOnInit() {
  }

  uploadFile() {  
    let formData = new FormData();  
    formData.append('upload', this.fileInput.nativeElement.files[0])  
  
    this.service.UploadExcel(formData).subscribe(result => {  
      this.message = result.toString();  
    });   
  }  

}
