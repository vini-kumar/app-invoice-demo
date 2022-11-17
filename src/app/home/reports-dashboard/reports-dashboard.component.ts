import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TitleStrategy } from '@angular/router';
import { ApiService } from '../shared/api.service';
import { ReportsModel } from './reports-dasboard.model';
@Component({
  selector: 'app-reports-dashboard',
  templateUrl: './reports-dashboard.component.html',
  styleUrls: ['./reports-dashboard.component.scss']
})
export class ReportsDashboardComponent implements OnInit {
formValue!:FormGroup;
reportsModelObj : ReportsModel = new ReportsModel();
reportsData! :any; 
data:any; 
  id: any;
  row: any;
  showAdd! :boolean;
  showUpdate!:boolean;
constructor(private formbuilder:FormBuilder, private api:ApiService) { }

  ngOnInit(): void {
    this.formValue=this.formbuilder.group({
      customerName : [''],
      customerAddress:[''],
      invoiceNumber:[''],
      gst:['']
    })
    this.getAllReport();
  }

//   postReports(){
//      this.reportsModelObj.customerName = this.formValue.value.customerName;
//      this.reportsModelObj.customerAddress = this.formValue.value.customerAddress;
//      this.reportsModelObj.invoiceNumber = this.formValue.value.invoiceNumber;
//      this.reportsModelObj.gst = this.formValue.value.gst;
// this.api.postReport(this.reportsModelObj)
// .subscribe(res=>{
//   console.log(res);
//   alert("employee added successfully");
//   this.formValue.reset();
//   this.showAdd = true;
// },
// err=>{
//   alert("somthing went wrong");
// })
//   }

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
// updateReports(){
//   this.reportsModelObj.customerName = this.formValue.value.customerName;
//      this.reportsModelObj.customerAddress = this.formValue.value.customerAddress;
//      this.reportsModelObj.invoiceNumber = this.formValue.value.invoiceNumber;
//      this.reportsModelObj.gst = this.formValue.value.gst; 
//      this.api.updateReport( this.reportsModelObj,this.reportsModelObj.id)
//       .subscribe(res=>{
//          alert("updated successfully")
//          this.formValue.reset();
//          this.getAllReport();
//       })
//     }

}
