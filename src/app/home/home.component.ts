import { Component, OnInit ,Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocsService } from './invoice-list/components/invoice-docs/docs.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  users: any;
  id: any;
  data: any;
  constructor(private docs:DocsService, private route:ActivatedRoute) { }

  ngOnInit(): void {
  
    let resp=this.docs.getUsers();
resp.subscribe((data)=>this.users=data);

  }

 

}
