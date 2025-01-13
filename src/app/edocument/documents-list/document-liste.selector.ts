import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DocumentState } from './document-liste.reducer';

export const selectDocumentState = createFeatureSelector<DocumentState>('documents');

export const selectDocuments = createSelector(
  selectDocumentState,
  (state) => state?.documents || [] // Utilisation de l'opérateur `?.` pour éviter les erreurs
);

export const selectLoading = createSelector(
  selectDocumentState,
  (state) => state?.loading || false
);

export const selectLoaded = createSelector(
  selectDocumentState,
  (state) => state?.loaded || false
);

export const selectError = createSelector(
  selectDocumentState,
  (state) => state?.error || null
);
