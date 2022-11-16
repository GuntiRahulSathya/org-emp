import { TestBed } from '@angular/core/testing';

import { EmployeesupdateService } from './employeesupdate.service';

describe('EmployeesupdateService', () => {
  let service: EmployeesupdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeesupdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
