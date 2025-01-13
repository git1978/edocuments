
import {Route} from "@angular/router";
import { FilterComponent } from "./component/filter.component";
import { importProvidersFrom } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { FilterEffects } from "./filter.effects";
import { filterReducer } from "./filter.reducer";
import { filterFeatureName, documentsFeatureName } from "./filter.types";
import { DocumentEffects } from "../documents-list/document-liste.effect";
import { documentReducer } from "../documents-list/document-liste.reducer";

export const filterHomeRoutes: Route[] = [
    {
        path: '',
        providers: [
            importProvidersFrom(
                StoreModule.forFeature(filterFeatureName, filterReducer),
                EffectsModule.forFeature([FilterEffects]),
               // StoreModule.forFeature(listeDocuments, documentReducer),
                StoreModule.forFeature(documentsFeatureName, documentReducer),  
                EffectsModule.forFeature([DocumentEffects])
            )
        ],
        children: [
            {
                path: '',
                component: FilterComponent,
            }
        ],
    },
];
