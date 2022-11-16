import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeescreateserviceService {

  public loading: boolean = false;
  private apiURL = environment.baseURL;
  constructor(private http: HttpClient) { }

  public get_department_numbers() {
    return this.http.get(this.apiURL + 'departments?only_count=False');
  }

  public check_employee_id (employeeId: string): any {
    this.http.get(this.apiURL + `employees/${employeeId}`);
  }

  public addContact (data: any) {
    this.loading = true;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.post(this.apiURL + 'employees', data, httpOptions).pipe(
      tap(() => { this.loading = false; })
    );

  }


  public addDependent (data: any) {
    this.loading = true;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.post(this.apiURL + `employees/${data.employee_id}/dependents`, data, httpOptions).pipe(
      tap(() => { this.loading = false; })
    );
  }
}
