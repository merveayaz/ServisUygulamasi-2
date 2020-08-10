import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {  User  } from './user';

@Injectable({
  providedIn: 'root'
})
export class NgserviceService {

  constructor(private _http:HttpClient) { }
  fetchUserListFromRemote():Observable<any>{
    return this._http.get<any>("http://localhost:8080/getuserlist");
  }
  addUserToRemote( user : User ):Observable<any>{
    return this._http.post<any>("http://localhost:8080/adduser",user);
   
}
}
