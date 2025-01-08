import {createActionGroup, emptyProps, props} from '@ngrx/store';
import { Compte, Devise, filterFeatureName, TypeDocument } from './filter.types';

export const FilterActions = createActionGroup({
    source: filterFeatureName,
    events: {
         // Actions for compte.json
         'getCompteJson': emptyProps(),
         'getCompteJsonSuccess': props<{ compteData: Compte[] }>(),
         'getCompteJsonError': props<{ error: any }>(),
         
         // Actions for devise.json
         'getDeviseJson': emptyProps(),
         'getDeviseJsonSuccess': props<{ deviseData: Devise[] }>(),
         'getDeviseJsonError': props<{ error: any }>(),
         
         // Actions for typeDocumentFilter.json
         'getTypeDocumentFilterJson': emptyProps(),
         'getTypeDocumentFilterJsonSuccess': props<{ typeDocumentFilterData: TypeDocument[] }>(),
         'getTypeDocumentFilterJsonError': props<{ error: any }>(),
    },
});