import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmployeesupdateService } from './employeesupdate.service';

@Component({
  selector: 'app-employeesupdate',
  templateUrl: './employeesupdate.component.html',
  styleUrls: ['./employeesupdate.component.scss']
})
export class EmployeesupdateComponent implements OnInit {


  employeeUpdateForm = new FormGroup({
    ssn: new FormControl('', [Validators.required, Validators.pattern(/^[\d]+$/)]),
    employee_id: new FormControl('', [Validators.required]), //, Validators.pattern(/^[a-zA-Z0-9-]+$/)
    first_name: new FormControl(''),
    middle_name: new FormControl(''),
    last_name: new FormControl(''),
    dob: new FormControl('', [Validators.required]),
    address1: new FormControl(''),
    address2: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    country: new FormControl(''),
    zipcode: new FormControl(''),
    department_number: new FormControl('', [Validators.required]),
    join_date: new FormControl('', [Validators.required]),
    job_title: new FormControl('', [Validators.required, Validators.pattern(/^[a-z ]+$/)])
  });

  employeeDeleteForm = new FormGroup({
    employee_id: new FormControl('', [Validators.required])
  });

  submitted: boolean = false;
  dept_nums: any = [];
  dept_data: any = [];
  action: any;
  public employeeIdPresent: boolean = false;

  constructor(private employeesUpdateService: EmployeesupdateService, private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.action = this.activatedroute.snapshot.routeConfig?.path;
    this.getDepartmentNumbers();
    console.log(this.dept_nums);
  }

  onSubmit(form: FormGroup) {
    console.log(form);
    if (!form.valid) {
      alert('Form validation failed. Please fix them before submitting it.');
    } else {
      // console.log('Valid?', form.valid); // true or false
      // console.log('first_name', form.value.first_name);
      // console.log('last_name', form.value.last_name);
      // console.log('dob', form.value.dob);
      // console.log(form.value);
      this.employeesUpdateService.UpdateContact(form.value).subscribe( (response: any) => { console.log(response);});
    }
  }

  deleteSubmit(form: FormGroup) {
    console.log(form);
    if (!form.valid) {
      alert('Form validation failed. Please fix them before submitting it.');
    } else {
      // console.log('Valid?', form.valid); // true or false
      // console.log('first_name', form.value.first_name);
      // console.log('last_name', form.value.last_name);
      // console.log('dob', form.value.dob);
      // console.log(form.value);
      this.employeesUpdateService.deleteContact(form.value).subscribe( (response: any) => { console.log(response);});
    }
  }

  public getDepartmentNumbers() {
    this.employeesUpdateService.get_department_numbers().subscribe(
      (response: any) => {
        console.log(response);
        response.forEach((val: any) =>  this.dept_nums.push(val.department_number));
        console.log('dept_data', this.dept_nums);
      });
  }

  validateSsnVal() {
    return (!this.employeeUpdateForm.controls.ssn.value)  ? 'You must enter a value' :
      this.employeeUpdateForm.controls.ssn.hasError('pattern') ? 'Please enter a valid ssn' :
      this.employeeUpdateForm.controls.ssn.value.length !== 9 ? 'SSN should be 9 digit number' : '';
  }

  validateDOBVal() {
    return (!this.employeeUpdateForm.controls.dob.value)  ? 'You must enter a value' :
      this.employeeUpdateForm.controls.dob.value >= Date() ? 'Please provide older date' : '';
  }

  validateDeptNum() {
    return (!this.employeeUpdateForm.controls.department_number.value)  ? 'You must enter a value' :
    this.employeeUpdateForm.controls.department_number.hasError('pattern') ? 'Please enter a valid department_number' : '';
  }

  checkEmployeeIdVal() {
    let employeeIdMissing = false;
    if (!this.employeeUpdateForm.controls.employee_id.value) {
      return 'You must enter a value'
    }
    if (this.employeeUpdateForm.controls.employee_id.hasError('pattern')) {
      return 'Please enter a valid employee_id' ;
    }
    this.employeesUpdateService.check_employee_id(this.employeeUpdateForm.controls.employee_id.value).subscribe(
      (response: any) => {
        console.log(response);
        employeeIdMissing = response ? false : true;
      }
    );
    console.log('empid missing', employeeIdMissing);
    return !employeeIdMissing ? "Employee Id doesn't exist in the database" : '';
  }

}
