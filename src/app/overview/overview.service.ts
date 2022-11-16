import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { tap } from 'rxjs/operators';
import { switchMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class OverviewService {


  private apiURL = environment.baseURL;
  constructor(private http: HttpClient) {

  }

  public getEmployeeTotalCount() {
    return this.http.get(this.apiURL + 'employees?only_count=true');
  }

  public getFullTimeEmployeeTotalCount() {
    return this.http.get(this.apiURL + 'employees/fulltime?only_count=true');
  }

  public getContractEmployeeTotalCount() {
    return this.http.get(this.apiURL + 'employees/contract?only_count=true');
  }

  public getDepartmentTotalCount() {
    return this.http.get(this.apiURL + 'departments?only_count=true');
  }

  public getDependentTotalCount() {
    return this.http.get(this.apiURL + 'dependents?only_count=true');
  }

  public getProjectsTotalCount() {
    return this.http.get(this.apiURL + 'projects?only_count=true');
  }
}
