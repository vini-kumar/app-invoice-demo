import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeInvoiceRoutingModule } from './home-invoice-routing.module';
import { HomeInvoiceComponent } from './home-invoice.component';
import { ListInvComponent } from './list-inv/list-inv.component';
import { DetailsInvComponent } from './details-inv/details-inv.component';

@NgModule({
  declarations: [
    HomeInvoiceComponent,
    ListInvComponent,
    DetailsInvComponent
  ],
  imports: [
    CommonModule,
    HomeInvoiceRoutingModule
  ]
})
export class HomeInvoiceModule { }
