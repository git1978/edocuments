import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DocumentState } from './document-liste.reducer';

export const selectDocumentState = createFeatureSelector<DocumentState>('documents');

export const selectDocuments = createSelector(selectDocumentState, (state) => state.documents);
export const selectDocumentsLoading = createSelector(selectDocumentState, (state) => state.loading);
export const selectDocumentsLoaded = createSelector(selectDocumentState, (state) => state.loaded); // Nouveau sélecteur
export const selectDocumentsError = createSelector(selectDocumentState, (state) => state.error);
