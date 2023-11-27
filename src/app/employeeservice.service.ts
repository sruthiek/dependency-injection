import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {
  public employeepersonal: any[] = [
    {

      "Name": "MARK",
      "Gender": "Male",
      "Address": "punathil house",
      "DOB": '5/16/1997'
    },

    {

      "Name": "MALAVIKA",
      "Gender": "Female",
      "Address": "sruthilayam house",
      "DOB": '2/3/2000'
    },

    {

      "Name": "SRUTHI",
      "Gender": "Female",
      "Address": "karollathi house",
      "DOB": '12/9/1997'
    },

    {

      "Name": "JOHN",
      "Gender": "Male",
      "Address": "makkuni house",
      "DOB": '10/9/1995'
    }
  ];

  public employeeofficilal: any[] = [
    {
      "id": "emp1",
      "Salary": 30000,
      "Post": "software engineer",

    },

    {

      "id": "emp2",
      "Salary": 20000,
      "Post": "software analyst",
    },

    {

      "id": "emp3",
      "Salary": 40000,
      "Post": " Associate software-engineer",
    },

    {

      "id": "emp4",
      "Salary": 15000,
      "Post": "Tester",
    }
  ];

  getEmppersonal(): any[] {
    {
      return this.employeepersonal;
    }
  }

  getEmpofficial(): any[] {
    {
      return this.employeeofficilal;
    }
  }



  constructor() { }
}
