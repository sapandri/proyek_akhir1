import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { mainUrl } from './config';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

    getAllUsers(): Observable<Object> {
    return this.http.get(mainUrl + '/api/users');
    }
    getUser(id): Observable<Object> {
    return this.http.get(mainUrl + '/api/users/' + id);
    }
    createUser(user): Observable<Object> {
    return this.http.post(
    mainUrl + '/api/users/',user);
    }
    updateUser(id, user): Observable<Object> {
      return this.http.put(
      mainUrl + '/api/users/' + id,user)
    }
    deleteUser(id): Observable<Object> {
    return this.http.delete(
    mainUrl + '/api/users/' + id)
    }
    deleteUsers(): Observable<Object> {
    return this.http.delete(
    mainUrl + '/api/users/')
    }
   
}
