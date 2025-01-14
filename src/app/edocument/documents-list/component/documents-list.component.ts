import { Component, Input, OnInit } from '@angular/core';
import { DocumentFacade } from '../document-liste.facade';
import { Documents } from '../../filter/filter.types';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'documents-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './documents-list.component.html',
  styleUrl: './documents-list.component.scss'
})
export class DocumentsListComponent implements OnInit {
downloadDocument(_t19: any) {
throw new Error('Method not implemented.');
}

  documents$: Observable<Documents[]> = this.documentFacade.documents$;
  loading$ = this.documentFacade.loading$;
  loaded$ = this.documentFacade.loaded$;
  error$ = this.documentFacade.error$;

  constructor(private readonly documentFacade: DocumentFacade) {}

  ngOnInit(): void { /* TODO document why this method 'ngOnInit' is empty */ }

  viewDocument(id: string): void {
    // Logique pour voir le détail du document
    console.log(`Voir le document avec l'ID: ${id}`);
  }

  deleteDocument(id: string): void {
    // Logique pour supprimer le document
    console.log(`Supprimer le document avec l'ID: ${id}`);
  }
  
}
