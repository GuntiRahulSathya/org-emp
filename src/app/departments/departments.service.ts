import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  private apiURL = environment.baseURL;
  constructor(private http: HttpClient) { }

  public getDepartments() {
    return this.http.get(this.apiURL + 'departments?only_count=False&skip=0&limit=100');
  }
}
