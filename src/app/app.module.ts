import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaindashboardComponent } from './components/maindashboard/maindashboard.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { ProgramComponent } from './components/program/program.component';
import { StudentComponent } from './components/student/student.component';
import { AccountComponent } from './components/account/account.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { CoursesComponent } from './components/courses/courses.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MaindashboardComponent,
    SidebarComponent,
    HeaderComponent,
    ProgramComponent,
    StudentComponent,
    AccountComponent,
    EmployeesComponent,
    DepartmentsComponent,
    CoursesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
