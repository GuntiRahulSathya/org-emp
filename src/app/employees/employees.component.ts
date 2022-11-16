import { Component, OnInit } from '@angular/core';
import { EmployeesService } from './employees.service';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  loading: boolean = false;
  dataSource: any = [];
  displayedColumns: string[] = ['employee_id', 'first_name', 'middle_name', 'last_name', 'dob', 'department_number', 'job_title', 'join_date', 'country'];
  expandedElement:  any;
  constructor(private employeesService: EmployeesService) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  public getEmployees() {
    this.employeesService.getEmployees().subscribe(
      response => {
        this.dataSource = response;
      }
    );
  }

  public addData() {

  }

  public removeData() {

  }

  public applyFilter(evnt_target: any) {
    console.log(this.dataSource.length, evnt_target.value);
    this.employeesService.getFilteredEmployees(evnt_target.value).subscribe(value => { this.dataSource = value; })
    console.log(this.dataSource.length);
  }

  public createNew() {

  }

  public cancelOrDelete() {

  }

  public edit() {

  }

}
