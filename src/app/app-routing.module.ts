import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentComponent } from './student/student.component';
import { MenuComponent } from './Shared/menu/menu.component';
import { StudentLoggedinComponent } from './student/student-loggedin/student-loggedin.component';
import { StudentEditComponent } from './student/student-edit/student-edit.component';
import { StatsComponent } from './student/stats/stats.component';
import { PaymentHistoryComponent } from './student/payment-history/payment-history.component';
import { AdminComponent } from './admin/admin.component';
import { PaymentAmtComponent } from './student/payment-amt/payment-amt.component';
import { CanteenManagerComponent } from './canteen-manager/canteen-manager.component';
import { PaymentFormComponent } from './student/payment-form/payment-form.component';
import { ActualPaymentComponent } from './student/actual-payment/actual-payment.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { UploadDetailsComponent } from './admin/upload-details/upload-details.component';
import { SearchStudentComponent } from './admin/search-student/search-student.component';
import { AdminMenuComponent } from './admin/admin-menu/admin-menu.component';
import { ShowUsersComponent } from './canteen-manager/show-users/show-users.component';
import { AdminPaymentComponent } from './admin/admin-payment/admin-payment.component';
import { CMLoggedIn } from './canteen-manager/CMLoggedIn/CMLoggedIn.component';
import { CMUploadMenuComponent } from './canteen-manager/cmupload-menu/cmupload-menu.component';
import { PageNotFoundComponent } from './Shared/page-not-found/page-not-found.component';
import { ShowUsersAdminComponent } from './admin/show-users/show-users.component';

const appRoutes: Routes = [
  { path: '', component: StudentComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'studentLogged', component: StudentLoggedinComponent },
  { path: 'student/profile', component: StudentEditComponent },
  { path: 'stats', component: StatsComponent },
  { path: 'paymenthistory', component: PaymentHistoryComponent },
  { path: 'adminLogin', component: AdminComponent },
  { path: 'payment', component: PaymentAmtComponent },
  { path: 'CMLogin', component: CanteenManagerComponent },
  { path: 'paymentform', component: PaymentFormComponent, children:[
    { path:'actualpayment/:id', component: ActualPaymentComponent }
  ] },
  { path: 'adminLogged', component: AdminLoginComponent },
  { path: 'uploadDetails', component: UploadDetailsComponent },
  { path: 'searchStu', component: SearchStudentComponent },
  { path: 'adminMenu', component: AdminMenuComponent },
  { path: 'paymenthistoryadmin', component: AdminPaymentComponent },
  { path: 'CMLogged', component: CMLoggedIn },
  { path: 'CMUpload', component: CMUploadMenuComponent },
  { path: 'CMShow', component: ShowUsersComponent },
  { path: 'AdminShow', component: ShowUsersAdminComponent },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
