import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { DocumentActions } from './document-list.action';
import { DocumentsService } from '../services/documents.service';

@Injectable()
export class DocumentEffects {
  constructor(private readonly actions$: Actions, private readonly documentService: DocumentsService) {}

  loadDocuments$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DocumentActions.loadDocuments),
      switchMap((action) =>
        this.documentService.getDocuments(action.searchCriteria).pipe(
          map((documents) => DocumentActions.loadDocumentsSuccess({ documents })),
          catchError((error) => [DocumentActions.loadDocumentsFailure({ error })])
        )
      )
    )
  );
}
