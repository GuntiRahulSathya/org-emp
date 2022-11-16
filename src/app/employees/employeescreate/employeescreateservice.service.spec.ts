import { TestBed } from '@angular/core/testing';

import { EmployeescreateserviceService } from './employeescreateservice.service';

describe('EmployeescreateserviceService', () => {
  let service: EmployeescreateserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeescreateserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
