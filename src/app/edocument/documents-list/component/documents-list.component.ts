import { Component, Input, OnInit } from '@angular/core';
import { DocumentFacade } from '../document-liste.facade';
import { Documents } from '../../filter/filter.types';

@Component({
  selector: 'documents-list',
  standalone: true,
  imports: [],
  templateUrl: './documents-list.component.html',
  styleUrl: './documents-list.component.scss'
})
export class DocumentsListComponent implements OnInit {
  @Input() documents: Documents[] = []; // Accept documents as input
  @Input() loading: boolean = false; // Accept loading state
  @Input() loaded: boolean = false; // Accept loading state
  @Input() error: any = null; // Accept error state


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
