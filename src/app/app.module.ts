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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginComponent } from './components/login/login.component';
import { StudentSideNavComponent } from './studentcomponents/layouts/student-side-nav/student-side-nav.component';
import { StudentDashboardComponent } from './studentcomponents/student-dashboard/student-dashboard.component';
import { StudentAccountsComponent } from './studentcomponents/student-accounts/student-accounts.component';
import { PersonalInfoComponent } from './studentcomponents/personal-info/personal-info.component';
import { CourseRegistrationComponent } from './studentcomponents/course-registration/course-registration.component';
import { StudentResultsComponent } from './studentcomponents/student-results/student-results.component';
import { LecturerSideNavComponent } from './lecturercomponents/layouts/lecturer-side-nav/lecturer-side-nav.component';
import { LecturerDashboardComponent } from './lecturercomponents/lecturer-dashboard/lecturer-dashboard.component';
import { StudentGradesComponent } from './lecturercomponents/student-grades/student-grades.component';
import { RequestInterceptorService } from 'src/services/interceptor/request-interceptor.service';

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
    LandingPageComponent,
    LoginComponent,
    StudentSideNavComponent,
    StudentDashboardComponent,
    StudentAccountsComponent,
    PersonalInfoComponent,
    CourseRegistrationComponent,
    StudentResultsComponent,
    LecturerSideNavComponent,
    LecturerDashboardComponent,
    StudentGradesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
