import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/home/shared/api.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReportsModel } from 'src/app/home/reports-dashboard/reports-dasboard.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-invoice',
  templateUrl: './list-invoice.component.html',
  styleUrls: ['./list-invoice.component.scss']
})
export class ListInvoiceComponent implements OnInit {
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
  constructor(private formbuilder:FormBuilder, private api:ApiService, private router:Router) { }

  ngOnInit(): void {
    
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
      gstno:['']
    })
    this.getAllReport();
  }
 

  
  

getAllReport(){

 this.api.getReport(this.data)
 .subscribe(res=>{
   this.reportsData =res;
   this.getAllReport();
 })
}

deleteReport(row:any){
 this.api.deleteReport(row.id)
 .subscribe(res=>{
   alert('Employee Deleted');
   this.getAllReport();
 })
}
// updateReport(row:any){
//   this.api.updateReport(id)
//   .subscribe(res=>{
//     alert('Employee updated');
  
//   })
// }

onEdit(row:any){
 this.reportsModelObj.id= row.id;
 this.formValue.controls['customerName'].setValue(row.customerName)
 this.formValue.controls['customerAddress'].setValue(row.customerAddress)
 this.formValue.controls['invoiceNumber'].setValue(row.invoiceNumber)
 this.formValue.controls['gst'].setValue(row.gst)
 
 this.showUpdate = true;
 this.getAllReport();
}
updateReports(){
 this.reportsModelObj.customerName = this.formValue.value.customerName;
 this.reportsModelObj.invoiceno = this.formValue.value.invoiceno;
 this.reportsModelObj.ponumber = this.formValue.value.ponumber;
 this.reportsModelObj.address = this.formValue.value.address;
 this.reportsModelObj.paymentterms = this.formValue.value.paymentterms;
 this.reportsModelObj.hsnno = this.formValue.value.hsnno;
 this.reportsModelObj.description = this.formValue.value.description;
 this.reportsModelObj.quantity = this.formValue.value.quantity;

 this.reportsModelObj.unitprice = this.formValue.value.unitprice;
 this.reportsModelObj.baseamount = this.formValue.value.baseamount;
 this.reportsModelObj.totalgst = this.formValue.value.totalgst;

 this.reportsModelObj.totalamount = this.formValue.value.totalamount;

 this.reportsModelObj.gsttype = this.formValue.value.gsttype;
 this.reportsModelObj.gstno = this.formValue.value.gstno;
    this.api.updateReport( this.reportsModelObj,this.reportsModelObj.id)
     .subscribe(res=>{
        alert("updated successfully")
        this.formValue.reset();
        this.getAllReport();
     })
   }


   sumary(){
     this.router.navigate(['/main-home/summary-invoice']);
   }

}
