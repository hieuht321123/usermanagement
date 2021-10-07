import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private API: string ="http://localhost:3000/users";
  constructor(private httpService: HttpClient) { }

  getAllUser(): Observable<User[]>{
    return this.httpService.get<User[]>(this.API);
    
  }
  deleteUser(id: number): Observable<User>{
    return this.httpService.delete<User>(this.API +"/" +id);
  }
  addUser(user: User):Observable<User>{
    return this.httpService.post<User>(this.API, user);
  }
  getUserById(id: number):Observable<User>{
    return this.httpService.get<User>(this.API+"/" +id);
    
  }
  updateUser(user: User): Observable<User>{
    return this.httpService.put(`${this.API}/${user.id}`, user);
  }
}
