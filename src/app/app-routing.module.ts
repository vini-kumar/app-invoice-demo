import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InvoiceDetailsComponent } from './home/invoice-list/components/invoice-details/invoice-details.component';
import { InvoiceDocsComponent } from './home/invoice-list/components/invoice-docs/invoice-docs.component';
import { InvoiceSheetComponent } from './home/invoice-list/components/invoice-sheet/invoice-sheet.component';
import { InvoiceSummaryComponent } from './home/invoice-list/components/invoice-summary/invoice-summary.component';
import { InvoiceListComponent } from './home/invoice-list/invoice-list.component';
import { LoginComponent } from './login/login.component';
import { AddInvoiceComponent } from './main-home/add-invoice/add-invoice.component';
import { ListInvoiceComponent } from './main-home/list-invoice/list-invoice.component';
import { ListidComponent } from './main-home/listid/listid.component';
import { MainHomeComponent } from './main-home/main-home.component';
import { PurchaseComponent } from './main-home/Purchase/purchase/purchase.component';
import { SummaryInvoiceComponent } from './main-home/summary-invoice/summary-invoice.component';
import { SignUpComponent } from './sign-up/sign-up.component';

// import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'',component:SignUpComponent},
  // {path:'',component:LoginComponent},
  {path:'home',component:HomeComponent}, 
  {path:'main-home',component:MainHomeComponent,children:[
    {path:'add-invoice',component:AddInvoiceComponent},
    {path:'summary-invoice',component:SummaryInvoiceComponent},
    {path:'purchase',component:PurchaseComponent},
    {path:'listid/:id',component:ListidComponent},    {path:'',component:ListInvoiceComponent}
  ]}, 
  {path:'admin',loadChildren:()=>import('./admin/admin.module').then(mod=>mod.AdminModule)},
  { path: 'home-invoice', loadChildren: () => import('./home-invoice/home-invoice.module').then(m => m.HomeInvoiceModule) }
  //  {path:'invoice-list',component:InvoiceListComponent,children:[
  //     {path:'invoice-details',component:InvoiceDetailsComponent},
  //     {path:'invoice-docs',component:InvoiceDocsComponent},
  //     {path:'invoice-sheet',component:InvoiceSheetComponent},
  //     {path:'invoice-summary',component:InvoiceSummaryComponent}
  //   ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



