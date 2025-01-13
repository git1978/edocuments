
import { createReducer, on } from '@ngrx/store';
import { DocumentActions } from './document-list.action';
import { Documents } from '../filter/filter.types';

export interface DocumentState {
    documents: Documents[];
    loading: boolean;
    loaded: boolean; // Indique si les documents ont été chargés avec succès
    error: string | null;
  }
  
  export const initialState: DocumentState = {
    documents: [],
    loading: false,
    loaded: false, // Initialisé à false
    error: null,
  };

export const documentReducer = createReducer(
  initialState,
  on(DocumentActions.loadDocuments, (state) => ({
    ...state,
    loading: true,
    loaded: false, // Réinitialiser loaded lors d'une nouvelle requête
    error: null,
  })),
  on(DocumentActions.loadDocumentsSuccess, (state, { documents }) => ({
    ...state,
    loading: false,
    loaded: true, // Passer loaded à true en cas de succès
    documents,
  })),
  on(DocumentActions.loadDocumentsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    loaded: false, // Reste à false en cas d'échec
    error,
  }))
);
