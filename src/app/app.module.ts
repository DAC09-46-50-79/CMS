import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ToastrService } from './Shared/toastr.service';
import { AdminPaymentComponent } from './admin/admin-payment/admin-payment.component';
import { ShowUsersComponent } from './canteen-manager/show-users/show-users.component';
import { CMLoggedIn } from './canteen-manager/CMLoggedIn/CMLoggedIn.component';
import { CanteenNavBarComponent } from './canteen-manager/canteen-nav-bar/canteen-nav-bar.component';
import { SearchStudentComponent } from './admin/search-student/search-student.component';
import { SearchResultComponent } from './admin/search-result/search-result.component';
import { AdminNavBarComponent } from './admin/admin-nav-bar/admin-nav-bar.component';
import { AdminComponent } from './admin/admin.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';

import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Shared/header/header.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { StudentComponent } from './student/student.component';
import { StudentNavBarComponent } from './student/student-nav-bar/student-nav-bar.component';
import { StudentLoggedinComponent } from './student/student-loggedin/student-loggedin.component';
import { PaymentAmtComponent } from './student/payment-amt/payment-amt.component';
import { MenuComponent } from './Shared/menu/menu.component';
import { StudentEditComponent } from './student/student-edit/student-edit.component';
import { StatsComponent } from './student/stats/stats.component';
import { PaymentHistoryComponent } from './student/payment-history/payment-history.component';
import { UploadDetailsComponent } from './admin/upload-details/upload-details.component';
import { PaymentFormComponent } from './student/payment-form/payment-form.component';
import { CanteenManagerComponent } from './canteen-manager/canteen-manager.component';
import { AdminMenuComponent } from './admin/admin-menu/admin-menu.component';
import { ActualPaymentComponent } from './student/actual-payment/actual-payment.component';
import { CMUploadMenuComponent } from './canteen-manager/cmupload-menu/cmupload-menu.component';
import { PageNotFoundComponent } from './Shared/page-not-found/page-not-found.component';
import { DatePipe } from '@angular/common';

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
  { path: 'viewUsersAdmin', component: ShowUsersComponent },
  { path: 'paymenthistoryadmin', component: AdminPaymentComponent },
  { path: 'CMLogged', component: CMLoggedIn },
  { path: 'CMUpload', component: CMUploadMenuComponent },
  { path: 'CMShow', component: ShowUsersComponent },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    StudentComponent,
    StudentNavBarComponent,
    StudentLoggedinComponent,
    PaymentAmtComponent,
    MenuComponent,
    StudentEditComponent,
    StatsComponent,
    PaymentHistoryComponent,
    UploadDetailsComponent,
    PaymentFormComponent,
    AdminLoginComponent,
    AdminComponent,
    AdminNavBarComponent,
    SearchResultComponent,
    SearchStudentComponent,
    CanteenNavBarComponent,
    CanteenManagerComponent,
    CMLoggedIn,
    ShowUsersComponent,
    AdminMenuComponent,
    AdminPaymentComponent,
    AdminNavBarComponent,
    ActualPaymentComponent,
    CMUploadMenuComponent,
    ShowUsersComponent,
    PageNotFoundComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ToastrService, HttpClient, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
