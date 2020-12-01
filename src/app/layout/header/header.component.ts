import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  gotoLogin() {
    this.router.navigate(['login'])
  }
  gotoSignup() {
    this.router.navigate(['sign-up'])
  }
}
