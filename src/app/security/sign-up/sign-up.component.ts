import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidatorsService } from './../validator/custom-validators.service';
import { SecurityServiceService } from './../service/security-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
registerForm:any=FormGroup;
submitted=false;
  constructor(private formBuilder:FormBuilder,private customValidator:CustomValidatorsService, private service:SecurityServiceService, private router:Router) { }

  ngOnInit() {
    this.registerForm=this.formBuilder.group({
      firstName: ['',[Validators.required]],
      lastName: ['',[Validators.required]],
      username: ['',[Validators.required,Validators.minLength(6),this.customValidator.validateUserName]],
      email: ['', [Validators.required,Validators.email, this.customValidator.validEmailChecker]],
      phone: ['',[Validators.required,Validators.minLength(11),Validators.maxLength(11)]],
      password: ['', Validators.compose([Validators.required, this.customValidator.patternValidator()])],
      confirmPassword: ['', [Validators.required]]  
    }, {
      validator: this.customValidator.MatchPassword('password', 'confirmPassword'),
    })
  }
  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  register():any {
    
    this.submitted=true;
    if(this.registerForm.invalid){
      return;
    }
    this.service.registerUser(this.registerForm.value).subscribe(result=>{
      this.router.navigate(["/login"])
      console.log(result)
     
    },
    err=>console.log(err)
    )

    }
}
