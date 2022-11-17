import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
// import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { TopNavComponent } from './home/components/top-nav/top-nav.component';
import { SideNavComponent } from './home/components/side-nav/side-nav.component';
import { InvoiceListComponent } from './home/invoice-list/invoice-list.component';
import { InvoiceSummaryComponent } from './home/invoice-list/components/invoice-summary/invoice-summary.component';
import { InvoiceDetailsComponent } from './home/invoice-list/components/invoice-details/invoice-details.component';
import { InvoiceDocsComponent } from './home/invoice-list/components/invoice-docs/invoice-docs.component';
import { InvoiceSheetComponent } from './home/invoice-list/components/invoice-sheet/invoice-sheet.component';
import {  HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReportsDashboardComponent } from './home/reports-dashboard/reports-dashboard.component';
import { MainHomeComponent } from './main-home/main-home.component';
import { ListInvoiceComponent } from './main-home/list-invoice/list-invoice.component';
import { AddInvoiceComponent } from './main-home/add-invoice/add-invoice.component';
import { SummaryInvoiceComponent } from './main-home/summary-invoice/summary-invoice.component';
import { ApiService } from './home/shared/api.service';
import { ListidComponent } from './main-home/listid/listid.component';
import { PurchaseComponent } from './main-home/Purchase/purchase/purchase.component';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    // LoginComponent,
    HomeComponent,
    TopNavComponent,
    SideNavComponent,
    InvoiceListComponent,
    InvoiceSummaryComponent,
    InvoiceDetailsComponent,
    InvoiceDocsComponent,
    InvoiceSheetComponent,
    ReportsDashboardComponent,
    MainHomeComponent,
    ListInvoiceComponent,
    AddInvoiceComponent,
    SummaryInvoiceComponent,
    ListidComponent,
    PurchaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,FormsModule,
    ReactiveFormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
