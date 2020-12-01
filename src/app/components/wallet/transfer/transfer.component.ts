import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {
  hideForm:boolean;
  constructor() { }

  ngOnInit() {
    
  }


  openTransferAccount() :any{
    console.log("it is working");
    this.hideForm=true;
  }


}
