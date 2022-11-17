import { Component, OnInit ,Input} from '@angular/core';
import { DocsService } from '../invoice-docs/docs.service';
@Component({
  selector: 'app-invoice-summary',
  templateUrl: './invoice-summary.component.html',
  styleUrls: ['./invoice-summary.component.scss']
})
export class InvoiceSummaryComponent implements OnInit {
  users: any;
 
  constructor(private docs:DocsService) { }

  ngOnInit(): void {
    let resp=this.docs.getUsers();
resp.subscribe((data)=>this.users=data);

  }

  
  

}
