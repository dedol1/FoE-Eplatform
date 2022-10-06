import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './components/account/account.component';
import { CoursesComponent } from './components/courses/courses.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { MaindashboardComponent } from './components/maindashboard/maindashboard.component';
import { ProgramComponent } from './components/program/program.component';
import { StudentComponent } from './components/student/student.component';

const routes: Routes = [
  {path: '', redirectTo:'dashboard',pathMatch: 'full'},
  {path:'dashboard', component: MaindashboardComponent},
  {path:'programs', component: ProgramComponent},
  {path:'students', component: StudentComponent},
  {path:'accounts', component: AccountComponent},
  {path:'employees', component: EmployeesComponent},
  {path:'departments', component: DepartmentsComponent},
  {path:'courses', component: CoursesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
