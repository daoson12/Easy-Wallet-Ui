import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransferComponent } from './transfer.component';

import { FormsModule } from '@angular/forms';
import { TransferRoutingModule } from './transfer-routing.module';

@NgModule({
  declarations: [TransferComponent],
  imports: [

CommonModule,
    TransferRoutingModule,
    FormsModule
  ]
})
export class TransferModule { }
