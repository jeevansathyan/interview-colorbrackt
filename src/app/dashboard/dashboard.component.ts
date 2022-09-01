import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
employeeList:any

  constructor( private employeeService:EmployeeService) { }

  ngOnInit(): void {
this.employeeService.allEmployeList().subscribe((data)=>{
console.log(data);
this.employeeList=data;
})
  }

}
