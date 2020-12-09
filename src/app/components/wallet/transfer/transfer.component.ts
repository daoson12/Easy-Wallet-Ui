import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { WalletService } from './../wallet.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {
  loggedInUser: any = JSON.parse(sessionStorage.getItem('loggedInUser') || '{}');
  hideForm: boolean;
  accountNo: any
  recipient: any = {};
  currentTime = new Date();
  amountToTransfer: any;
  transactionPin: any;
  constructor(private walletService: WalletService, private toastr: ToastrService) { }

  ngOnInit() {

  }


  openTransferAccount(): any {
    console.log(this.accountNo);


    this.walletService.getUserAccountNumber(this.accountNo).subscribe(res => {
      console.log(res);
      if (res == null) {
        this.toastr.error('Ops', `No user found with account no ${this.accountNo}`)
      }
      else {
        this.hideForm = true;
        this.toastr.success("", `${this.accountNo} exists`)
      }
      this.recipient = res

    })
  }

  transfer() {


    var userId = this.loggedInUser.id
    var recipientUserId = this.recipient.id;
    var recipientAcctNo = this.recipient?.walletAccountId?.accountNumber;
    var amountToTransfer = this.amountToTransfer
    var transactionPin = this.transactionPin

    this.walletService.transfer(userId, recipientUserId, recipientAcctNo, amountToTransfer, transactionPin).subscribe(res => {
      console.log(res);
      if (res.message == "Success") {
        this.toastr.success("", `You Transferred ${this.amountToTransfer} to ${this.recipient.username}`)
      } else {
        this.toastr.error('', res.message)
      }

    })

  }

}
