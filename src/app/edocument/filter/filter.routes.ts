
import {Route} from "@angular/router";
import { FilterComponent } from "./component/filter.component";
import { importProvidersFrom } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { FilterEffects } from "./filter.effects";
import { filterReducer } from "./filter.reducer";
import { filterFeatureName } from "./filter.types";

export const filterHomeRoutes: Route[] = [
    {
        path: '',
        providers: [
            importProvidersFrom(
                StoreModule.forFeature(filterFeatureName, filterReducer),
                EffectsModule.forFeature([FilterEffects])
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
