import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Compte, CompteResponse, Devise, DeviseResponse, TypeDocument, TypeDocumentResponse } from '../filter/filter.types';

@Injectable({
  providedIn: 'root',
})
export class DocumentsService {

  private baseUrl = 'assets/mocks/'; // Base URL for mock data files

  constructor(private http: HttpClient) {}


  getComptes(): Observable<Compte[]> {
    return this.http.get<CompteResponse>(`${this.baseUrl}comptes.json`).pipe(
      map((response: CompteResponse) => response.comptes.data) // Extract the `data` array
    );
  }
  

  
  getDevises(): Observable<Devise[]> {
    return this.http.get<DeviseResponse>(`${this.baseUrl}devises.json`).pipe(
      map((response: DeviseResponse) => response.devises.data) // Extract the `devises` array
    );
  }
  
  getTypeDocuments(): Observable<TypeDocument[]> {
    return this.http.get<TypeDocumentResponse>(`${this.baseUrl}documentTypes.json`).pipe(
      map((response: TypeDocumentResponse) => response.types.data) // Extract the `typeDocuments` array
    );
  }
  
}
