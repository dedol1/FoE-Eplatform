import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/services/department/department.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

  departments:any = [];

  constructor(private departmentService: DepartmentService) { }

  ngOnInit(): void {
    this.getAllDepartment()
  }

  getAllDepartment(){
    this.departmentService.getAllDepartments().subscribe((data: any[])=>{
      this.departments = data;
      console.log(data);
    })  
  }
}
