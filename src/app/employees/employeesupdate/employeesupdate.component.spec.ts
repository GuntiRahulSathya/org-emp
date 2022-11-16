import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesupdateComponent } from './employeesupdate.component';

describe('EmployeesupdateComponent', () => {
  let component: EmployeesupdateComponent;
  let fixture: ComponentFixture<EmployeesupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeesupdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeesupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
