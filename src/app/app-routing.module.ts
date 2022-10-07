import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './components/account/account.component';
import { CoursesComponent } from './components/courses/courses.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginComponent } from './components/login/login.component';
import { MaindashboardComponent } from './components/maindashboard/maindashboard.component';
import { ProgramComponent } from './components/program/program.component';
import { StudentComponent } from './components/student/student.component';
import { LecturerDashboardComponent } from './lecturercomponents/lecturer-dashboard/lecturer-dashboard.component';
import { StudentGradesComponent } from './lecturercomponents/student-grades/student-grades.component';
import { CourseRegistrationComponent } from './studentcomponents/course-registration/course-registration.component';
import { PersonalInfoComponent } from './studentcomponents/personal-info/personal-info.component';
import { StudentAccountsComponent } from './studentcomponents/student-accounts/student-accounts.component';
import { StudentDashboardComponent } from './studentcomponents/student-dashboard/student-dashboard.component';
import { StudentResultsComponent } from './studentcomponents/student-results/student-results.component';

const routes: Routes = [
  {path: '', redirectTo:'landingpage',pathMatch: 'full'},
  {path:'landingpage', component: LandingPageComponent},
  {path:'login', component: LoginComponent},
  {path:'dashboard', component: MaindashboardComponent},
  {path:'programs', component: ProgramComponent},
  {path:'students', component: StudentComponent},
  {path:'accounts', component: AccountComponent},
  {path:'employees', component: EmployeesComponent},
  {path:'departments', component: DepartmentsComponent},
  {path:'courses', component: CoursesComponent},
  {path:'student-dashboard', component: StudentDashboardComponent},
  {path:'student-accounts', component: StudentAccountsComponent},
  {path:'personal-info', component: PersonalInfoComponent},
  {path:'course-registration', component: CourseRegistrationComponent},
  {path:'student-results', component: StudentResultsComponent},
  {path:'lecturer-dashboard', component: LecturerDashboardComponent},
  {path:'student-grades', component: StudentGradesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
