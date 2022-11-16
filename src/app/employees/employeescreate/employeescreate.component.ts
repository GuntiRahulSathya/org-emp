import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeescreateserviceService } from './employeescreateservice.service';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-employeescreate',
  templateUrl: './employeescreate.component.html',
  styleUrls: ['./employeescreate.component.scss']
})
export class EmployeescreateComponent implements OnInit {

  employeeCreateForm = new FormGroup({
    ssn: new FormControl('', [Validators.required, Validators.pattern(/^[\d]+$/)]),
    // employee_id: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/)]),
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

  dependentCreateForm = new FormGroup({
    employee_id: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9-]+$/)]),
    dependent_name: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z .,]+$/)]),
    dependent_relation: new FormControl('', [Validators.required])
    });

  dependent_relations: string[] = ['Father', 'Mother', 'Brother', 'Sister', 'Son', 'Daughter', 'In-Law'];

  submitted: boolean = false;
  dept_nums: any = [];
  dept_data: any = [];
  action: any;
  public employeeIdPresent: boolean = false;

  constructor(private employeescreateService: EmployeescreateserviceService, private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.action = this.activatedroute.snapshot.routeConfig?.path;
    this.getDepartmentNumbers();
    console.log(this.dept_nums);
  }

  onSubmit(form: FormGroup) {
    if (!form.valid) {
      alert('Form validation failed. Please fix them before submitting it.');
    } else {
      // console.log('Valid?', form.valid); // true or false
      // console.log('first_name', form.value.first_name);
      // console.log('last_name', form.value.last_name);
      // console.log('dob', form.value.dob);
      // console.log(form.value);
      this.employeescreateService.addContact(form.value).subscribe( response => { console.log(response);});
    }
  }

  dependentSubmit(form: FormGroup) {
    console.log(form.value);
    if (!form.valid) {
      alert("Employee Id doesn't exist. Please check");
    } else {
      // console.log('Valid?', form.valid); // true or false
      // console.log('dependent_name', form.value.dependent_name);
      // console.log('dependent_relation', form.value.dependent_relation);
      // console.log('employee_id', form.value.employee_id);
      // console.log(form.value);

      this.employeescreateService.addDependent(form.value).subscribe( response => { console.log(response);});
    }
  }

  public getDepartmentNumbers() {
    this.employeescreateService.get_department_numbers().subscribe(
      (response: any) => {
        console.log(response);
        response.forEach((val: any) =>  this.dept_nums.push(val.department_number));
        console.log('dept_data', this.dept_nums);
      });
  }


  validateSsnVal() {
    return (!this.employeeCreateForm.controls.ssn.value)  ? 'You must enter a value' :
      this.employeeCreateForm.controls.ssn.hasError('pattern') ? 'Please enter a valid ssn' :
      this.employeeCreateForm.controls.ssn.value.length !== 9 ? 'SSN should be 9 digit number' : '';
  }

  validateDOBVal() {
    return (!this.employeeCreateForm.controls.dob.value)  ? 'You must enter a value' :
      this.employeeCreateForm.controls.dob.value >= Date() ? 'Please provide older date' : '';
  }

  validateDeptNum() {
    return (!this.employeeCreateForm.controls.department_number.value)  ? 'You must enter a value' :
    this.employeeCreateForm.controls.department_number.hasError('pattern') ? 'Please enter a valid department_number' : '';
  }

  validateDependentNameVal () {
    return (!this.dependentCreateForm.controls.dependent_name.value)  ? 'You must enter a value' :
    this.dependentCreateForm.controls.dependent_name.hasError('pattern') ? 'Please enter a valid dependent name' : '';
  }

  validateDependentRelationVal() {
    return (!this.dependentCreateForm.controls.dependent_relation.value)  ? 'You must enter a value' :
    this.dependent_relations.includes(this.dependentCreateForm.controls.dependent_relation.value) ? 'Please enter a valid dependent relation' :
    this.dependentCreateForm.controls.dependent_relation.hasError('pattern') ? 'Please enter a valid dependent relation' : '';
  }

  checkEmployeeIdVal() {
    let employeeIdMissing = false;
    if (!this.dependentCreateForm.controls.employee_id.value) {
      return 'You must enter a value'
    }
    if (this.dependentCreateForm.controls.employee_id.hasError('pattern')) {
      return 'Please enter a valid employee_id' ;
    }
    this.employeescreateService.check_employee_id(this.dependentCreateForm.controls.employee_id.value).subscribe(
      (response: any) => {
        employeeIdMissing = response ? false : true;
      }
    );
    console.log('empid missing', employeeIdMissing);
    return !employeeIdMissing ? "Employee Id doesn't exist in the database" : '';
  }


}

