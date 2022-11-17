import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DocsService {
  getAnswer() {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }

  // userSignUp(){
  //   console.warn("service call")
  // }

  userSignUp(data:any){
    return this.http.post('http://localhost:3000/seller',data)
  }

  public getUsers(){
    return this.http.get('http://localhost:3000/seller')
   
  }
  //  getOne(id: string){
  //   return this.http.get('http://localhost:3000/seller/'+id)
      
   
   
  // }

  // getOne(res:any)
  // {

  //   return this.http.get('http://localhost:3000/seller').map(res=>
  //   {
  //     return res.json()
  //   })
  // }

}
