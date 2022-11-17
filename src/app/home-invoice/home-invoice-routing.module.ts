import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeInvoiceComponent } from './home-invoice.component';
import { ListInvComponent } from './list-inv/list-inv.component';
const routes: Routes = [{ path: '', component: HomeInvoiceComponent },
{path:'listinv',component:ListInvComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeInvoiceRoutingModule { }
