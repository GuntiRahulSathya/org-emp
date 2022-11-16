import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  private apiURL = environment.baseURL;
  constructor(private http: HttpClient) { }

  public getEmployees() {
    return this.http.get(this.apiURL + 'employees?only_count=False&skip=0&limit=100');
  }

  public getFilteredEmployees(filterStr: string) {
    return this.http.get(this.apiURL + `employees?employee_id=${filterStr}`);
  }
}
