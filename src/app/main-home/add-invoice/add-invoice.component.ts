import { Component, OnInit } from '@angular/core';
// import { DocsService } from 'src/app/home/invoice-list/components/invoice-docs/docs.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReportsModel } from 'src/app/home/reports-dashboard/reports-dasboard.model';
import { ApiService } from 'src/app/home/shared/api.service';
import { Location } from '@angular/common';




@Component({
  selector: 'app-add-invoice',
  templateUrl: './add-invoice.component.html',
  styleUrls: ['./add-invoice.component.scss']
})


export class AddInvoiceComponent implements OnInit {


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
  pressNum(num: string) {
    
    //Do Not Allow . more than once
    if (num==".") {
      if (this.input !="" ) {
 
        const lastNum=this.getLastOperand()
        console.log(lastNum.lastIndexOf("."))
        if (lastNum.lastIndexOf(".") >= 0) return;
      }
    }
 
    //Do Not Allow 0 at beginning. 
    //Javascript will throw Octal literals are not allowed in strict mode.
    if (num=="0") {
      if (this.input=="" ) {
        return;
      }
      const PrevKey = this.input[this.input.length - 1];
      if (PrevKey === '/' || PrevKey === '*' || PrevKey === '-' || PrevKey === '+')  {
          return;
      }
    }
 
    this.input = this.input + num
    this.calcAnswer();
  }
 
 
  getLastOperand() {
    let pos:number;
    console.log(this.input)
    pos=this.input.toString().lastIndexOf("+")
    if (this.input.toString().lastIndexOf("-") > pos) pos=this.input.lastIndexOf("-")
    if (this.input.toString().lastIndexOf("*") > pos) pos=this.input.lastIndexOf("*")
    if (this.input.toString().lastIndexOf("/") > pos) pos=this.input.lastIndexOf("/")
    console.log('Last '+this.input.substr(pos+1))
    return this.input.substr(pos+1)
  }
 
 
  pressOperator(op: string) {
 
    //Do not allow operators more than once
    const lastKey = this.input[this.input.length - 1];
    if (lastKey === '/' || lastKey === '*' || lastKey === '-' || lastKey === '+')  {
      return;
    }
   
    this.input = this.input + op
    this.calcAnswer();
  }
 
 
  clear() {
    if (this.input !="" ) {
      this.input=this.input.substr(0, this.input.length-1)
    }
  }
 
  allClear() {
    this.result = '';
    this.input = '';
  }
 
  calcAnswer() {
    let formula = this.input;
 
    let lastKey = formula[formula.length - 1];
 
    if (lastKey === '.')  {
      formula=formula.substr(0,formula.length - 1);
    }
 
    lastKey = formula[formula.length - 1];
 
    if (lastKey === '/' || lastKey === '*' || lastKey === '-' || lastKey === '+' || lastKey === '.')  {
      formula=formula.substr(0,formula.length - 1);
    }
 
    console.log("Formula " +formula);
    this.result = eval(formula);
  }
 
  getAnswer() {
    this.calcAnswer();
    this.input = this.result;
    if (this.input=="0") this.input="";
    this.getAnswer();
  }
 

users:any;
  constructor(private formbuilder:FormBuilder, private api:ApiService,private location: Location) { }

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
      gstno:[''],
      date:['']
    })
    this.getAllReport();

//     let resp=this.docs.getUsers();
// resp.subscribe((data)=>this.users=data);

  }
  // signUp(data:object):void{
   
  //   this.docs.userSignUp(data).subscribe((result)=>{
  //   window.alert("sucessfull");
  //   console.log(result);
    
  //   });
  // }




  postReports(){
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
    this.reportsModelObj.date = this.formValue.value.date;

this.api.postReport(this.reportsModelObj)
.subscribe(res=>{
 console.log(res);
 alert("employee added successfully");
 this.formValue.reset();
 this.showAdd = true;
},
err=>{
 alert("somthing went wrong");
})
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
 this.formValue.controls['invoiceno'].setValue(row.invoiceno)
 this.formValue.controls['ponumber'].setValue(row.ponumber)
 this.formValue.controls['address'].setValue(row.address)
 this.formValue.controls['quantity'].setValue(row.quantity)
 this.formValue.controls['paymentterms'].setValue(row.paymentterms)
 this.formValue.controls['hsnno'].setValue(row.hsnno)
 this.formValue.controls['description'].setValue(row.description)
 this.formValue.controls['unitprice'].setValue(row.unitprice)
 this.formValue.controls['baseamount'].setValue(row.baseamount)
 this.formValue.controls['totalgst'].setValue(row.totalgst)
 this.formValue.controls['totalamount'].setValue(row.totalamount)
 this.formValue.controls['gsttype'].setValue(row.gsttype)
 this.formValue.controls['gstno'].setValue(row.gstno)
 this.formValue.controls['date'].setValue(row.date)

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
 this.reportsModelObj.date = this.formValue.value.date;
    this.api.updateReport( this.reportsModelObj,this.reportsModelObj.id)
     .subscribe(res=>{
        alert("updated successfully")
        this.formValue.reset();
        this.getAllReport();
     })
   }

   goBack(): void {
    this.location.back();
  }

}

