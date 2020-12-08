import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepositRoutingModule } from './deposit-routing.module';
import { DepositComponent } from './deposit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [DepositComponent],
  imports: [
    CommonModule,
    DepositRoutingModule, 
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DepositModule { }
