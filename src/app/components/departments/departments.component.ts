import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/services/department/department.service';
import {ProgramComponent} from 'src/app/components/program/program.component'
import { ProgramService } from 'src/services/program/program.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

  departments:any = [];
  programs:any = [];
  checkListFilter:any =[];
  departmentName: String = "";

  constructor(private departmentService: DepartmentService, private programService : ProgramService) { }

  ngOnInit(): void {
    this.getAllDepartment()
    this.getAllPrograms()
  }

  getAllDepartment(){
    this.departmentService.getAllDepartments().subscribe((data: any[])=>{
      this.departments = data;
      console.log(data);
    })  
  }

  getAllPrograms(){
    this.programService.getAllPrograms().subscribe((data: any[])=>{
      this.programs = data;
    })  
  
}

pushCheckBoxValue( value:any) {
  this.checkListFilter.push(value);
}

createDepartment(){
  const payload = {
    "departmentName" : this.departmentName,
    'programIds' : this.checkListFilter,
  }
  this.departmentService.createDepartment(payload).subscribe((response: any) => {
    window.location.reload()
  });
}

}
