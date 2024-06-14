import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  readonly url = 'http://localhost:3000/';
  constructor(private http: HttpClient) {}
  adduser(User:any, type:any):Observable<any>{
    debugger
    if(type=='Add'){
      return this.http.post(this.url+"Users",User);
    }else{
      return this.http.put(this.url+"Users/"+User.id,User);
    }
  }

  getuser():Observable<any>{
    return this.http.get(this.url+"Users");
  }

  deleteuser(id:any):Observable<any>{
    return this.http.delete(this.url+"Users/"+id);
  }

  edituser(id:any):Observable<any>{
    return this.http.get(this.url+"Users/"+id);
  }
 
}
