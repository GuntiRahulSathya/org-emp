import { Component, OnInit } from '@angular/core';
import { DependentsService } from './dependents.service';

@Component({
  selector: 'app-dependents',
  templateUrl: './dependents.component.html',
  styleUrls: ['./dependents.component.scss']
})
export class DependentsComponent implements OnInit {

  loading: boolean = false;
  dataSource: any = [];
  displayedColumns: string[] = ['employee_id', 'dependent_id', 'dependent_name', 'dependent_relation'];
  constructor(private dependentsService: DependentsService) { }

  ngOnInit(): void {
    this.getDepartments();
  }

  public getDepartments() {
    this.dependentsService.getDependents().subscribe(
      (response: any) => {
        this.dataSource = response;
      }
    );
  }

}
