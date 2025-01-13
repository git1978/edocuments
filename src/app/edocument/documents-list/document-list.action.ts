import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Documents } from '../filter/filter.types';
export const DocumentActions = createActionGroup({
  source: 'Documents',
  events: {
    // Déclenchement de chargement
    'Load Documents': emptyProps(),

    // Succès du chargement
    'Load Documents Success': props<{ documents: Documents[] }>(),

    // Échec du chargement
    'Load Documents Failure': props<{ error: string }>(),
  },
});
