import { Component, OnInit } from '@angular/core';
import { OverviewService } from './overview.service';


@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  employee_count: any = {'count': 0};
  full_time_employee_count: any = {'count': 0};
  contract_employee_count: any = {'count': 0};
  department_count: any = {'count': 0};
  dependent_count: any = {'count': 0};
  project_count: any = {'count': 0};
  loading: boolean = false;

  constructor(private overviewService: OverviewService) { }

  ngOnInit(): void {
    this.getCounts();
  }

  public getCounts() {
    this.loading = true;
    this.overviewService.getEmployeeTotalCount().subscribe(
      response => {
        this.employee_count = response;
      });
    this.overviewService.getFullTimeEmployeeTotalCount().subscribe(
      response => {
        this.full_time_employee_count = response;
      });
    this.overviewService.getContractEmployeeTotalCount().subscribe(
      response => {
        this.contract_employee_count = response;
      });
    this.overviewService.getDepartmentTotalCount().subscribe(
      response => {
        this.department_count = response;
      });
    this.overviewService.getDependentTotalCount().subscribe(
      response => {
        this.dependent_count = response;
      });
    this.overviewService.getProjectsTotalCount().subscribe(
      response => {
        this.project_count = response;
      });
    this.loading = false;
  }

}
