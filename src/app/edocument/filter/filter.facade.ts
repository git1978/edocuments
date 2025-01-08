import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FilterState } from './filter.reducer';
import { FilterActions } from './filter.actions';
import { Compte, Devise, TypeDocument } from './filter.types';
import { selectComptes, selectDevises, selectTypeDocuments, selectLoading, selectError, selectLoaded } from './filter.selectors';

@Injectable({
  providedIn: 'root',
})
export class FilterFacade {
  comptes$: Observable<Compte[]> = this.store.pipe(select(selectComptes));
  devises$: Observable<Devise[]> = this.store.pipe(select(selectDevises));
  typeDocuments$: Observable<TypeDocument[]> = this.store.pipe(select(selectTypeDocuments));
  loading$: Observable<boolean> = this.store.pipe(select(selectLoading));
  loaded$: Observable<boolean> = this.store.pipe(select(selectLoaded));
  error$: Observable<any> = this.store.pipe(select(selectError));

  constructor(private store: Store<FilterState>) {
    this.store.dispatch(FilterActions.getCompteJson());
    this.store.dispatch(FilterActions.getDeviseJson());
    this.store.dispatch(FilterActions.getTypeDocumentFilterJson());
  }
}
