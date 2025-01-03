// filter.effects.ts
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { DocumentsService } from '../services/documents.service'; 
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { FilterActions } from './filter.actions'; 
import { Compte, Devise, TypeDocument } from './filter.types'; 

@Injectable()
export class FilterEffects {
  constructor(
    private actions$: Actions,
    private documentsService: DocumentsService
  ) {}

  // Effect for fetching comptes data
  loadComptes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FilterActions.getCompteJson), // Action to trigger the effect
      mergeMap(() =>
        this.documentsService.getComptes().pipe(
          map((compteData: Compte[]) => 
            FilterActions.getCompteJsonSuccess({ compteData }) // Correctly pass compteData as an array
          ),
          catchError(error => of(FilterActions.getCompteJsonError({ error }))) // Handle errors
        )
      )
    )
  );

  // Effect for fetching devises data
  loadDevises$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FilterActions.getDeviseJson), 
      mergeMap(() =>
        this.documentsService.getDevises().pipe(
          map((deviseData: Devise[]) => 
            FilterActions.getDeviseJsonSuccess({ deviseData })
          ),
          catchError(error => of(FilterActions.getDeviseJsonError({ error })))
        )
      )
    )
  );

  // Effect for fetching typeDocuments data
  loadTypeDocuments$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FilterActions.getTypeDocumentFilterJson),
      mergeMap(() =>
        this.documentsService.getTypeDocuments().pipe(
          map((typeDocumentFilterData: TypeDocument[]) =>
            FilterActions.getTypeDocumentFilterJsonSuccess({ typeDocumentFilterData })
          ),
          catchError(error => of(FilterActions.getTypeDocumentFilterJsonError({ error })))
        )
      )
    )
  );
}
