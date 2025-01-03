import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FilterState } from './filter.reducer';

// Sélectionne l'état de la fonctionnalité 'filter'
export const selectFilterState = createFeatureSelector<FilterState>('filter');

// Sélecteurs pour chaque propriété de l'état
export const selectComptes = createSelector(
  selectFilterState,
  (state: FilterState) => state.comptes
);

export const selectDevises = createSelector(
  selectFilterState,
  (state: FilterState) => state.devises
);

export const selectTypeDocuments = createSelector(
  selectFilterState,
  (state: FilterState) => state.typeDocuments
);

export const selectLoading = createSelector(
  selectFilterState,
  (state: FilterState) => state.loading
);

export const selectLoaded = createSelector(
  selectFilterState,
  (state: FilterState) => state.loaded
);

export const selectError = createSelector(
  selectFilterState,
  (state: FilterState) => state.error
);
