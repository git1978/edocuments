import { Injectable, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DocumentActions } from './document-list.action';
import { DocumentState } from './document-liste.reducer';
import { selectDocuments, selectError, selectLoaded, selectLoading} from './document-liste.selector';
import { SearchCriteria } from '../filter/filter.types';

@Injectable({
  providedIn: 'root',
})
export class DocumentFacade  implements OnInit {
  documents$ = this.store.select(selectDocuments);
  loading$ = this.store.select(selectLoading);
  loaded$ = this.store.select(selectLoaded);
  error$ = this.store.select(selectError);

  constructor(private readonly store: Store<DocumentState>) {}
  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty
  
  
  }

  loadDocuments(searchCriteria: SearchCriteria): void {
    this.store.dispatch(DocumentActions.loadDocuments({ searchCriteria }));
  }
}
