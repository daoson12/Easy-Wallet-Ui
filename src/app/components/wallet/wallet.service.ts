import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  baseURL:String='/wallet/'
  getAllDepositLog
  constructor(private http:HttpClient) { }


  getAccountBalance(id:any):any{
    return this.http.get(this.baseURL + "getBalance?id=" + id);
  }
  getAllLogs():any{
    return this.http.get(this.baseURL + "log/getAllDepositLog");
  }
  makeDeposit(paymentMethod: any, depositAmount: any, transactionPin: any, userId: any): any {
    return this.http.post(`${this.baseURL}Deposit?paymentMethod=${paymentMethod}&depositAmount=${depositAmount}
    &transactionPin=${transactionPin}&userId=${userId}`, {})
  }

  withdraw(paymentMethod: any, amountToWithdraw: any, transactionPin: any, userId: any) {
    return this.http.post(`${this.baseURL}/withdraw?&paymentMethod=${paymentMethod}&amountToWithdraw=${amountToWithdraw}
    &transactionPin=${transactionPin}&userId=${userId}`, {})
    
  }


}
