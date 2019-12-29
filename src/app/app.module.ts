
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
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: 'menu', component: MenuComponent },
  { path: 'student', component: StudentLoggedinComponent },
  { path: 'student/profile', component: StudentEditComponent },
  { path: 'stats', component: StatsComponent },
  { path: 'paymenthistory', component: PaymentHistoryComponent },
  { path: 'adminLogin', component: UploadDetailsComponent }
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
    HomeComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
