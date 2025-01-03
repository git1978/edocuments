import { createReducer, on } from "@ngrx/store";
import { FilterActions } from "./filter.actions";
import { Compte, Devise, TypeDocument } from "./filter.types";

export interface FilterState {
    comptes: Compte[];
    devises: Devise[];
    typeDocuments: TypeDocument[];
    loading: boolean;
    loaded: boolean;
    error: any;
  }
  
  export const initialState: FilterState = {
    comptes: [],
    devises: [],
    typeDocuments: [],
    loading: false,
    loaded: false,
    error: null,
  };
  
  export const filterReducer = createReducer(
    initialState,
    // Actions for comptes
    on(FilterActions.getCompteJson, (state) => ({
      ...state,
      loading: true,
      loaded: false,
    })),
    on(FilterActions.getCompteJsonSuccess, (state, { compteData }) => ({
      ...state,
      comptes: compteData,
      loading: false,
      loaded: true,
    })),
    on(FilterActions.getCompteJsonError, (state, { error }) => ({
      ...state,
      error,
      loading: false,
      loaded: false,
    })),
  
    // Actions for devises
    on(FilterActions.getDeviseJson, (state) => ({
      ...state,
      loading: true,
      loaded: false,
    })),
    on(FilterActions.getDeviseJsonSuccess, (state, { deviseData }) => ({
      ...state,
      devises: deviseData,
      loading: false,
      loaded: true,
    })),
    on(FilterActions.getDeviseJsonError, (state, { error }) => ({
      ...state,
      error,
      loading: false,
      loaded: false,
    })),
  
    // Actions for typeDocuments
    on(FilterActions.getTypeDocumentFilterJson, (state) => ({
      ...state,
      loading: true,
      loaded: false,
    })),
    on(FilterActions.getTypeDocumentFilterJsonSuccess, (state, { typeDocumentFilterData }) => ({
      ...state,
      typeDocuments: typeDocumentFilterData,
      loading: false,
      loaded: true,
    })),
    on(FilterActions.getTypeDocumentFilterJsonError, (state, { error }) => ({
      ...state,
      error,
      loading: false,
      loaded: false,
    }))
  );
  