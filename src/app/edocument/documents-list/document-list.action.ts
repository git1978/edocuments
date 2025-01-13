import { createActionGroup, props } from '@ngrx/store';
import { Documents, SearchCriteria } from '../filter/filter.types';
export const DocumentActions = createActionGroup({
  source: 'Documents',
  events: {
    // Déclenchement de chargement
    'Load Documents': props<{ searchCriteria: SearchCriteria }>(),

    // Succès du chargement
    'Load Documents Success': props<{ documents: Documents[] }>(),

    // Échec du chargement
    'Load Documents Failure': props<{ error: string }>(),
  },
});
