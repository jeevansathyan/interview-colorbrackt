import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-view-one',
  templateUrl: './view-one.component.html',
  styleUrls: ['./view-one.component.css']
})
export class ViewOneComponent implements OnInit {

employeeID:any
employeeData:any

  constructor(private activatedRoute:ActivatedRoute, private employeeService:EmployeeService) { }

  ngOnInit(): void {
this.activatedRoute.params.subscribe((data)=>{
this.employeeID=data['id']
})

this.employeeService.viewEmployee(this.employeeID).subscribe((item:any)=>{
console.log(item);
this.employeeData=item
})
  }

}
