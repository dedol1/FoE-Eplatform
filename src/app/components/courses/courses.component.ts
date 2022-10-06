import { Component, OnInit } from '@angular/core';
import { CourseServiceService } from 'src/services/course/course-service.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses:any = [];
  courseName: String = "";
  courseCode: String = "";
  creditHours:number= 0;

  constructor(private courseService : CourseServiceService) { }

  ngOnInit(): void {
    this.getAllCourses()
  }

  getAllCourses(){
    this.courseService.getAllCourses().subscribe((data: any[])=>{
      this.courses = data;
    })  
  }

  createCourse(){
     
    const payload = {
      "courseName" : this.courseName,
      'creditHours' : this.creditHours,
      'courseCode' : this.courseCode
    }
    this.courseService.createCourse(payload).subscribe((response: any) => {
      window.location.reload()
    });
  }

  deleteCourse(id:any){
    this.courseService.deleteCourse(id).subscribe();
    window.location.reload()
  }
 
}

