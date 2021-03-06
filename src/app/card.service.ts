import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ICard } from './interfaces';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const apiUrl = environment.apiUrl

@Injectable()
export class CardService {

  constructor(private http:HttpClient) { }
  loadCardList(): Observable<ICard[]>{
   return this.http.get<ICard[]>(`${apiUrl}/themes`)
  }
  loadCard(id: string): Observable<ICard>{
    return this.http.get<ICard>(`${apiUrl}/themes/${id}`)
   }
   saveCard(data: any) {
    return this.http.post<ICard>(`${apiUrl}/themes`, data, { withCredentials: true });
  }
}
