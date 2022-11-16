import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DependentsService {

  private apiURL = environment.baseURL;
  constructor(private http: HttpClient) { }

  public getDependents() {
    return this.http.get(this.apiURL + 'dependents?only_count=False&skip=0&limit=100');
  }
}
