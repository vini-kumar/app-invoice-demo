import { Injectable } from '@angular/core';
import {HttpClient  } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { identifierName } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
postReport(data : any){
  return this.http.post<any>("http://localhost:3000/seller",data)
   .pipe(map((res:any)=>{
      return res;
   }))
}
getReport(data:any){
  return this.http.get<any>("http://localhost:3000/seller",data)
   .pipe(map((res:any)=>{
      return res;
   }))
}
getlist(id:number){
   return this.http.get("http://localhost:3000/seller/"+id)
    
 }
updateReport(data : any , id:number){
  return this.http.put<any>("http://localhost:3000/seller/"+id,data)
   .pipe(map((res:any)=>{
      return res;
   }))
}
deleteReport(id : number){
  return this.http.delete<any>("http://localhost:3000/seller/"+id)
   .pipe(map((res:any)=>{
      return res;
   }))
}

}
