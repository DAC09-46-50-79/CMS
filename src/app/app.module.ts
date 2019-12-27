
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

const appRoutes: Routes = [
  { path: 'menu', component: MenuComponent },
  { path: 'student', component: StudentLoggedinComponent },
  { path: 'student/profile', component: StudentEditComponent }
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
    StudentEditComponent
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
