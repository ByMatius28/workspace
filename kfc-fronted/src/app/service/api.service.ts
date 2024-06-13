import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  createCombo<T>(comboData: T): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/combo`, comboData);
  }

  getCombos(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/combo`);
  }
  
  updateCombo(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/combo/${id}`, data);
  }
}
