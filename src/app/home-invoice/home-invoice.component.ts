import { Component, OnInit } from '@angular/core';
import { DocsService } from '../home/invoice-list/components/invoice-docs/docs.service';
@Component({
  selector: 'app-home-invoice',
  templateUrl: './home-invoice.component.html',
  styleUrls: ['./home-invoice.component.scss']
})
export class HomeInvoiceComponent implements OnInit {

  users: any;
  id: any;
  data: any;
  constructor(private docs:DocsService) { }

  ngOnInit(): void {
  }

}
