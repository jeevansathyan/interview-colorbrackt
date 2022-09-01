import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private httpClient: HttpClient) {}

  allEmployeList() {
    // api call to get employees list.
    const baseURL = 'https://retoolapi.dev/GFHqAV/getemployees/';
    return this.httpClient.get(baseURL);
  }

viewEmployee(employeeID:any){
// api call to get one employee.
  const baseURL = 'https://retoolapi.dev/H2F0Ui/getemployedetail?id='+employeeID;
  return this.httpClient.get(baseURL);
}
}
