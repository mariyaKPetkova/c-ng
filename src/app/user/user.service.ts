import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { IUser } from '../interfaces';


const apiURL = 'https://caves-in-bg.herokuapp.com'

@Injectable()
export class UserService {

  user: IUser | null | undefined = undefined;

  get isLogged(): boolean {
    return !!this.user;
  }

  constructor(
    private http: HttpClient
  ) { }

  login(data: { email: string; password: string }) {
    return this.http.post<IUser>(`${apiURL}/user/login`, data, { withCredentials: true }).pipe(
      tap((user) => this.user = user)
    );
  }

  register(data: { email: string; password: string }) {
    return this.http.post<IUser>(`${apiURL}/user/register`, data, { withCredentials: true }).pipe(
      tap((user) => this.user = user)
    );
  }


  logout() {
    return this.http.post<IUser>(`${apiURL}/user/logout`, {}, { withCredentials: true }).pipe(
      tap(() => this.user = null)
    );
  }

  
}