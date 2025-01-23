import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserCrudOperationsService {

  private apiUrl ='http://localhost:3000/users';
  constructor(private http: HttpClient) { }

  //login user using username and password
  
 loginUser(username: string, password: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?username=${username}&password=${password}`);
  } 
  

  //register user
  registerUser(user: any): Observable<any> {
    return this.http.post(this.apiUrl, user);
  }
  //update user based on username
  //we will use this method to update user details later in next sprint

  getUserData(username: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?username=${username}`);
  }

  /*deleteUser(username: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}?username=${username}`);
  }*/
    
}

