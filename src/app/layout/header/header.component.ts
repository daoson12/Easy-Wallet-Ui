import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SecurityServiceService } from './../../security/service/security-service.service';
import { SessionServiceService } from './../../security/service/session-service.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loggedInUser:any=JSON.parse(sessionStorage.getItem("loggedInUser"));
  constructor(private router: Router, public service:SecurityServiceService, public session:SessionServiceService) { }

  ngOnInit() {

    
  }
  gotoLogin() {
    this.router.navigate(['login'])
  }
  gotoSignup() {
    this.router.navigate(['sign-up'])
  }

  logout(){
    this.session.logout()
    this.router.navigate(['login'])
  }
}
