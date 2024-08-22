import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User';
import { Config } from './config';
@Injectable({
  providedIn: 'root'
})
export class UserService {

 private myAppURL=Config.userApiUrl;


  constructor(private http:HttpClient) { }
  
  getListUsers():Observable<User>{
    return this.http.get<User>(this.myAppURL+"GetAllUsers");
  }
  getUser(id:number): Observable<User> {
    return this.http.get<User>(this.myAppURL+"GetUser/"+id);
  }
  AddUser(user:User):Observable<User>{
    return this.http.post<User>(this.myAppURL+"AddUser",user);
  }
  UpdateUser(id:number,user:User):Observable<User>{
    return this.http.put<User>(this.myAppURL+"UpdateUser/"+id,user);
  }
  DeleteUser(id:number,user:User):Observable<User>{
    return this.http.delete<User>(this.myAppURL+"DeleteUser/"+id);
}
}