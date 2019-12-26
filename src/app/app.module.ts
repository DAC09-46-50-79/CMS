import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Shared/header/header.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { StudentComponent } from './student/student.component';
import { StudentNavBarComponent } from './student/student-nav-bar/student-nav-bar.component';
import { StudentLoggedinComponent } from './student/student-loggedin/student-loggedin.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    StudentComponent,
    StudentNavBarComponent,
    StudentLoggedinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
