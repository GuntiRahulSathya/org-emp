import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeesupdateService {

  public loading: boolean = false;
  private apiURL = environment.baseURL;
  constructor(private http: HttpClient) { }

  public get_department_numbers() {
    return this.http.get(this.apiURL + 'departments?only_count=False');
  }

  public check_employee_id (employeeId: string): any {
    this.http.get(this.apiURL + `employees/${employeeId}`);
  }

  public UpdateContact (data: any) {
    this.loading = true;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.put(this.apiURL + `employees/${data.employee_id}`, data, httpOptions).pipe(
      tap(() => { this.loading = false; })
    );

  }

  public deleteContact (data: any) {
    this.loading = true;
    return this.http.delete(this.apiURL + `employees/${data.employee_id}`).pipe(
      tap(() => { this.loading = false; })
    );

  }
}
