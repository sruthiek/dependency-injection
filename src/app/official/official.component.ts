import { Component } from '@angular/core';
import { EmployeeserviceService } from '../employeeservice.service';

@Component({
  selector: 'app-official',
  templateUrl: './official.component.html',
  styleUrls: ['./official.component.scss']
})
export class OfficialComponent {
 empOfficial:any[]=[];

  constructor(private employeservice:EmployeeserviceService){}

  ngOnInit(){
    return this.empOfficial=this.employeservice?.getEmpofficial();
  }

}
