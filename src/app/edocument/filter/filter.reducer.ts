import { createReducer, on } from '@ngrx/store';
import { FilterActions } from './filter.actions';
import { Compte, Devise, TypeDocument } from './filter.types';

// Define the initial state for Filter
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

// Define the reducer using the actions
export const filterReducer = createReducer(
  initialState,

  // Actions for comptes
  on(FilterActions.getCompteJson, (state): FilterState => ({
    ...state,
    loading: true,
    loaded: false,
  })),
  on(FilterActions.getCompteJsonSuccess, (state, { compteData }): FilterState => ({
    ...state,
    comptes: Array.isArray(compteData) ? [...compteData] : [],
    loading: false,
    loaded: true,
  })),
  on(FilterActions.getCompteJsonError, (state, { error }): FilterState => ({
    ...state,
    error,
    loading: false,
    loaded: false,
  })),

  // Actions for devises
  on(FilterActions.getDeviseJson, (state): FilterState => ({
    ...state,
    loading: true,
    loaded: false,
  })),
  on(FilterActions.getDeviseJsonSuccess, (state, { deviseData }): FilterState => ({
    ...state,
    devises: Array.isArray(deviseData) ? [...deviseData] : [],
    loading: false,
    loaded: true,
  })),
  on(FilterActions.getDeviseJsonError, (state, { error }): FilterState => ({
    ...state,
    error,
    loading: false,
    loaded: false,
  })),

  // Actions for typeDocuments
  on(FilterActions.getTypeDocumentFilterJson, (state): FilterState => ({
    ...state,
    loading: true,
    loaded: false,
  })),
  on(FilterActions.getTypeDocumentFilterJsonSuccess, (state, { typeDocumentFilterData }): FilterState => ({
    ...state,
    typeDocuments: Array.isArray(typeDocumentFilterData) ? [...typeDocumentFilterData] : [],
    loading: false,
    loaded: true,
  })),
  on(FilterActions.getTypeDocumentFilterJsonError, (state, { error }): FilterState => ({
    ...state,
    error,
    loading: false,
    loaded: false,
  }))
);
