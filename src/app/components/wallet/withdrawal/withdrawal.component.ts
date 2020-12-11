import { Component, OnInit } from '@angular/core';
import { WalletService } from './../wallet.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-withdrawal',
  templateUrl: './withdrawal.component.html',
  styleUrls: ['./withdrawal.component.css']
})
export class WithdrawalComponent implements OnInit {

  constructor(private walletService:WalletService,private toastr: ToastrService) { }
  WalletTransaction:any=[];
  loggedInUser: any = JSON.parse(sessionStorage.getItem('loggedInUser') || '{}');
  amountToWithdraw: any;
  transactionPin:any;
  paymentMethod:any;
 

  ngOnInit(){
    this.getAllDepositLogs()
  }

withdrawal(){
  var paymentMethod= this.paymentMethod;
  var amountToWithdraw= this.amountToWithdraw;
  var transactionPin =this.transactionPin
  var userId= this.loggedInUser.id
  console.log(`PaymentMethod= ${paymentMethod} \nAmount= ${amountToWithdraw} \npin= ${transactionPin} \nUserId= ${userId}`);
  this.walletService.withdraw(paymentMethod, amountToWithdraw, transactionPin, userId).subscribe((res:any)=>{
    if (res.message == "Success") {
      this.toastr.success("", `You Withdraw ${this.amountToWithdraw} from your account`)
    } else {
      this.toastr.error('', res.message)
    }
    console.log(res);
  })
}

getAllDepositLogs(){
  this.walletService.getAllLogs().subscribe((res:any)=>{
    console.log(res);
      this.WalletTransaction = res.filter((x: any) => x.userId.id === this.loggedInUser.id && x.service === "Withdrawal");
      console.log(this.WalletTransaction);
  })
  }
}

