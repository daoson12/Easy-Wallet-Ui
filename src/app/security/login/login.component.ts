import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidatorsService } from './../validator/custom-validators.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: any = FormGroup;
  submitted=false
  constructor(private formBuilder:FormBuilder,private customValidator:CustomValidatorsService) { }

  ngOnInit() {
    this.loginForm=this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', Validators.compose([Validators.required, this.customValidator.patternValidator()])],
    })
  }

     // convenience getter for easy access to form fields
     get f() { return this.loginForm.controls; }

  login() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
  }
  console.log(this.loginForm.value);
  

  }
}
