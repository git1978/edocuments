import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { DocumentActions } from './document-list.action';
import { DocumentState } from './document-liste.reducer';
import { selectDocuments, selectDocumentsLoading, selectDocumentsLoaded, selectDocumentsError } from './document-liste.selector';
import { SearchCriteria } from '../filter/filter.types';

@Injectable({
  providedIn: 'root',
})
export class DocumentFacade {
  documents$ = this.store.select(selectDocuments);
  loading$ = this.store.select(selectDocumentsLoading);
  loaded$ = this.store.select(selectDocumentsLoaded); // Expose loaded
  error$ = this.store.select(selectDocumentsError);

  constructor(private readonly store: Store<DocumentState>) {}

  loadDocuments(searchCriteria: SearchCriteria): void {
    this.store.dispatch(DocumentActions.loadDocuments({ searchCriteria }));
  }
}
