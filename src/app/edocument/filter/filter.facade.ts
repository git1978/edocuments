import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { FilterActions } from "./filter.actions";
import { selectComptes, selectDevises, selectTypeDocuments, selectLoading, selectLoaded, selectError } from "./filter.selectors";
import { Compte, Devise, TypeDocument } from "./filter.types";

@Injectable({
    providedIn: 'root',
  })
  export class FilterFacade {
    comptes$: Observable<Compte[]> = this.store.select(selectComptes);
    devises$: Observable<Devise[]> = this.store.select(selectDevises);
    typeDocuments$: Observable<TypeDocument[]> = this.store.select(selectTypeDocuments);
    loading$: Observable<boolean> = this.store.select(selectLoading);
    loaded$: Observable<boolean> = this.store.select(selectLoaded);  // Nouveau selector
    error$: Observable<any> = this.store.select(selectError);
  
    constructor(private store: Store) {}
  
    loadComptes() {
      this.store.dispatch(FilterActions.getCompteJson());
    }
  
    loadDevises() {
      this.store.dispatch(FilterActions.getDeviseJson());
    }
  
    loadTypeDocuments() {
      this.store.dispatch(FilterActions.getTypeDocumentFilterJson());
    }
  }
  