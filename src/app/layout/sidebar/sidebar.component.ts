import { Component, OnInit } from '@angular/core';
import { SecurityServiceService } from './../../security/service/security-service.service';
import { SessionServiceService } from './../../security/service/session-service.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor( public service:SecurityServiceService, public session:SessionServiceService) { }
  loggedInUser:any= JSON.parse(sessionStorage.getItem("loggedInUser"))
  ngOnInit() {
    this.loggedInUser
  }

}
