import { Component, OnInit } from '@angular/core';
import { StudentInformationService } from 'src/services/studentInfo/student-information.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {

  studentInfo:any = [];
  email:any = sessionStorage.getItem('email')

  constructor(private personalInfoService: StudentInformationService) { }

  ngOnInit(): void {
    this.getStudentInfo()
  }

  getStudentInfo(){
    this.personalInfoService.getStudentInfo(this.email).subscribe((data: any[])=>{
      this.studentInfo = data;
      console.log(data)
    })  
  }

}
