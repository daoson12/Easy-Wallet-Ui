import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WithdrawalRoutingModule } from './withdrawal-routing.module';
import { WithdrawalComponent } from './withdrawal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [WithdrawalComponent],
  imports: [
    CommonModule,
    WithdrawalRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class WithdrawalModule { }
