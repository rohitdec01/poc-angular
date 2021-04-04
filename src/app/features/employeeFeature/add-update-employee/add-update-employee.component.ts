import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/service/Employee.service';

@Component({
  selector: 'app-add-update-employee',
  templateUrl: './add-update-employee.component.html',
  styleUrls: ['./add-update-employee.component.scss']
})
export class AddUpdateEmployeeComponent implements OnInit {

  flag: boolean
  empId: string

  employeeFormGroup: FormGroup

  constructor(private appService: EmployeeService, private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.empId = this.activatedRoute.snapshot.params.id
    if (this.empId) {
      this.appService.getEmployeeByID(this.empId).subscribe((result) => {
        this.employeeFormGroup = new FormGroup({
          name: new FormControl(result['name']),
          address: new FormControl(result['address']),
          mobile: new FormControl(result['mobile']),
          email: new FormControl(result['email'])
        })
      })
    } else {
      this.employeeFormGroup = this.formBuilder.group({
        name: ['', Validators.compose([
          Validators.required,
          Validators.minLength(2)])],
        address: ['', Validators.compose([
          Validators.minLength(2)])],
        mobile: ['', Validators.compose([
          Validators.required,
          Validators.minLength(8)])],
        email: ['', Validators.compose([
          Validators.required,
          Validators.email,
          Validators.minLength(5),
          Validators.pattern('[ -~]*')])]
      })
    }
  }

  addEmployee() {
    if (this.empId) {
      this.appService.updateEmployee(this.empId, this.employeeFormGroup.value).subscribe((result) => {
        this.flag = true
        this.employeeFormGroup.reset({})
      })
    } else {
      this.appService.addEmployee(this.employeeFormGroup.value).subscribe((result) => {
        this.flag = true
        this.employeeFormGroup.reset({})
      })
    }
  }

}
