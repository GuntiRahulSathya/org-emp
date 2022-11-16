import { Component, OnInit } from '@angular/core';
import { DepartmentsService } from './departments.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {

  loading: boolean = false;
  dataSource: any = [];
  displayedColumns: string[] = ['department_name', 'department_number', 'manager_id', 'location_id'];
  constructor(private departmentsService: DepartmentsService) { }

  ngOnInit(): void {
    this.getDepartments();
  }

  public getDepartments() {
    this.departmentsService.getDepartments().subscribe(
      response => {
        this.dataSource = response;
      }
    );
  }

  public addData() {

  }

  public removeData() {

  }

}
