import { Component, OnInit ,Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-invoice-details',
  templateUrl: './invoice-details.component.html',
  styleUrls: ['./invoice-details.component.scss']
})
export class InvoiceDetailsComponent implements OnInit {
  
 

  constructor() { }

  ngOnInit(): void {
// this.id=this.route.snapshot.params['id'];
// this.getOne()
  }

  // getOne(){
  //  this.docs.getOne(this.id).subscribe(data=>{
  //  this.data=data;
  //  console.log(this.data);
  //  })
  // }


}
