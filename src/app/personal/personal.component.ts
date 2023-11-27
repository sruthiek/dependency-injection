import { Component } from '@angular/core';
import { EmployeeserviceService } from '../employeeservice.service';


@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent {

  empPersonal:any[]=[];

constructor(private empservice:EmployeeserviceService){}

ngOnInit():void{
this.empPersonal=this.empservice?.getEmppersonal();
}

}
