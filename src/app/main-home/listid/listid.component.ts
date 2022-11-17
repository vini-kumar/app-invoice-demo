import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/home/shared/api.service';

@Component({
  selector: 'app-listid',
  templateUrl: './listid.component.html',
  styleUrls: ['./listid.component.scss']
})
export class ListidComponent implements OnInit {
user:any;
dateToday: any;

  constructor(private activateRoute: ActivatedRoute ,private api:ApiService) { }

  ngOnInit(): void {
     let id= this.activateRoute.snapshot.params['id'];
     this.api.getlist(id).subscribe(row =>{
      console.log(row);
      this.user = row;
     })


     this.dateToday = new Date().toDateString();
  }



}
