import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidatorsService } from './../validator/custom-validators.service';
import { SecurityServiceService } from './../service/security-service.service';
import { SessionServiceService } from './../service/session-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: any = FormGroup;
  submitted=false
  constructor(private formBuilder:FormBuilder,private router:Router, private customValidator:CustomValidatorsService,private service:SecurityServiceService, private session:SessionServiceService) { }

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
  
  this.service.login(this.loginForm.value).subscribe(
    (res: any) => {
      if (res.access_token) {
        this.session.setToken(res.access_token)
        this.authenticateAndGetUserRoles(this.loginForm.value);
        setTimeout(() => {
          this.router.navigate(["/"])
         }, 3000);
    
      }
    },
    (error: any) => {

      if (error.status === 401) {
       console.log("invalid credential");
      }
    }
  );

  }

  authenticateAndGetUserRoles(value:any){
    this.service.authenticateAndGetUserRoles(value).subscribe(
        (res: any) => {
   console.log(res);
            this.session.setUser(res.data)
            this.session.setUserRole(res.data.roles)
        },
        (error: any) => {
  
          if (error.status === 401) {
            console.log(error);
            
           console.log("invalid crendicial");
           
          }
        }
        );
  }
}
