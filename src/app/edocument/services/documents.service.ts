import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Compte, Devise, TypeDocument } from '../filter/filter.types';

@Injectable({
  providedIn: 'root',
})
export class DocumentsService {

  private baseUrl = 'assets/mocks/'; // Base URL for mock data files

  constructor(private http: HttpClient) {}

  // Fetch comptes data
  getComptes(): Observable<Compte[]> {
    return this.http.get<Compte[]>(`${this.baseUrl}comptes.json`);
  }

  
  // Fetch devises data
  getDevises(): Observable<Devise[]> {
    return this.http.get<Devise[]>(`${this.baseUrl}devises.json`);
  }

  // Fetch type documents data
  getTypeDocuments(): Observable<TypeDocument[]> {
    return this.http.get<TypeDocument[]>(`${this.baseUrl}typeDocumentFilter.json`);
  }
}
