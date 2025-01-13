import { Component, OnInit } from '@angular/core';
import { DocumentFacade } from '../document-liste.facade';

@Component({
  selector: 'documents-list',
  standalone: true,
  imports: [],
  templateUrl: './documents-list.component.html',
  styleUrl: './documents-list.component.scss'
})
export class DocumentsListComponent implements OnInit {
  documents$ = this.documentFacade.documents$;
  loading$ = this.documentFacade.loading$;
  loaded$ = this.documentFacade.loaded$; // Utilisation de loaded
  error$ = this.documentFacade.error$;

  constructor(private readonly documentFacade: DocumentFacade) {}

  ngOnInit(): void {
    this.documentFacade.loadDocuments();
  }

  viewDocument(id: string): void {
    // Logique pour voir le détail du document
    console.log(`Voir le document avec l'ID: ${id}`);
  }

  deleteDocument(id: string): void {
    // Logique pour supprimer le document
    console.log(`Supprimer le document avec l'ID: ${id}`);
  }
}
