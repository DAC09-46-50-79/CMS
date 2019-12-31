import { Injectable } from '@angular/core';

declare var toastr: any; //this object will hold the toastr object js library

@Injectable({
  providedIn: 'root'
})
export class ToastrService {

  constructor() {
    this.setting();
   }

  failedLogin(message: string, title?: string){
    toastr["error"](message, title);
  }

  setting(){
    
    toastr.options = {
      "closeButton": true,
      "debug": false,
      "newestOnTop": false,
      "progressBar": false,
      "positionClass": "toast-bottom-right",
      "preventDuplicates": true,
      "onclick": null,
      "showDuration": "300",
      "hideDuration": "1000",
      "timeOut": "4500",
      "extendedTimeOut": "1000",
      "showEasing": "swing",
      "hideEasing": "linear",
      "showMethod": "fadeIn",
      "hideMethod": "fadeOut",
      "toastClass": "toast-style"
    }
  }
}
