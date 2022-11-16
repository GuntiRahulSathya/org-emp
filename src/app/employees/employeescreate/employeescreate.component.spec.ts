import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeescreateComponent } from './employeescreate.component';

describe('EmployeescreateComponent', () => {
  let component: EmployeescreateComponent;
  let fixture: ComponentFixture<EmployeescreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeescreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeescreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
