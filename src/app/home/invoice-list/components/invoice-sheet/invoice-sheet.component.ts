import { Component, OnInit, Input ,Output, EventEmitter} from '@angular/core';
import { Params } from '@angular/router';
import { DocsService } from '../invoice-docs/docs.service';

@Component({
  selector: 'app-invoice-sheet',
  templateUrl: './invoice-sheet.component.html',
  styleUrls: ['./invoice-sheet.component.scss']
})
export class InvoiceSheetComponent implements OnInit {
  users: any;
  
  @Input()
  movieList: Array<string> = [];

  @Output()
  movieSelectedEventEmitter = new EventEmitter();
  dateToday: any;


  constructor(private docs:DocsService) { }
 
  ngOnInit(): void {

    this.dateToday = new Date().toDateString();



    let resp=this.docs.getUsers();
resp.subscribe((data)=>this.users=data);
  }

  movieSelected(selectedMovie:string){
  this.movieSelectedEventEmitter.emit(selectedMovie);

  
}



}