import { Component, OnInit } from '@angular/core';
import { ProgramService } from 'src/services/program/program.service';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})
export class ProgramComponent implements OnInit {

  programs:any = [];
  programName: String = "";
  programDuration:number= 0;


  constructor(private programService : ProgramService) { }

  ngOnInit(): void {
    this.getAllPrograms()
  }

  getAllPrograms(){
    this.programService.getAllPrograms().subscribe((data: any[])=>{
      this.programs = data;
    })  
  }

  createProgram(){
     
    const payload = {
      "programName" : this.programName,
      'programDuration' : this.programDuration,
    }
    this.programService.createProgram(payload).subscribe((response: any) => {
      window.location.reload()
    });
  }

  deleteProgram(id:any){
    this.programService.deletePrograms(id).subscribe();
    window.location.reload()
  }

}
