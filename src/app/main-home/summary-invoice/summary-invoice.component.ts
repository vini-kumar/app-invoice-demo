import { Component, OnInit } from '@angular/core';
import { Router ,Route  } from '@angular/router';
import { ApiService } from 'src/app/home/shared/api.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReportsModel } from 'src/app/home/reports-dashboard/reports-dasboard.model';

@Component({
  selector: 'app-summary-invoice',
  templateUrl: './summary-invoice.component.html',
  styleUrls: ['./summary-invoice.component.scss']
})
export class SummaryInvoiceComponent implements OnInit {

  formValue!:FormGroup;
  reportsModelObj : ReportsModel = new ReportsModel();
  reportsData! :any; 
  data:any; 
    id: any;
    row: any;
    showAdd! :boolean;
    showUpdate!:boolean;
    input:string = '';
    result:string = '';
    seller: any;
    users:any;
    route: any;
 
  constructor(private formbuilder:FormBuilder, private api:ApiService ) { }

  ngOnInit(): void {
//     let resp=this.docs.getUsers();
// resp.subscribe((data)=>this.users=data);

this.formValue=this.formbuilder.group({
  customerName : [''],
  invoiceno:[''],
  ponumber:[''],
  address:[''],
  paymentterms : [''],
  hsnno:[''],
  description:[''],
  quantity:[''],
  unitprice : [''],
  baseamount:[''],
  totalgst:[''],
  totalamount:[''],
  gsttype : [''],
  gstno:[''],
  date:['']
})
this.getAllReport();
   
// onclick= function () {
//   this.route.navigateByUrl('/main-home/list-invoice');
//   }
  
  

}

getAllReport(){

  this.api.getReport(this.data)
  .subscribe(res=>{
    this.reportsData =res;
    this.getAllReport();
  })
 }

 set(){
  this.route.navigateByUrl['/listid:id'];
 }

}