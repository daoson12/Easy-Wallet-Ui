import { Component, OnInit } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { WalletService } from './../wallet.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {
loggedInUser:any=JSON.parse(sessionStorage.getItem('loggedInUser') ||'{}');
paymentMethod: any
depositAmount: any
pin: any
WalletTransaction: any = [];


constructor(private walletService: WalletService,) { }

  ngOnInit(){
   this.getAllDepositLogs()
  }

  makeDeposit(){
    var paymentMethod = this.paymentMethod
    var depositAmount = this.depositAmount
    var transactionPin = this.pin
    var userId = this.loggedInUser.id
    console.log(`PaymentMethod= ${paymentMethod} \n Amount= ${depositAmount} \n pin= ${transactionPin} \n UserId= ${userId}`);

    this.walletService.makeDeposit(paymentMethod, depositAmount, transactionPin,userId).subscribe((res:any)=>{
    console.log(res);      
    })
  }
  getAllDepositLogs(){
  this.walletService.getAllLogs().subscribe((res:any)=>{
    console.log(res);
  
      this.WalletTransaction = res.filter((x: any) => x.userId.id === this.loggedInUser.id && x.service === "Deposit");
      console.log(this.WalletTransaction);
  })
  }
}
