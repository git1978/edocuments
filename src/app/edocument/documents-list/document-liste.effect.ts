import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { DocumentActions } from './document-list.action';
import { DocumentsService } from '../services/documents.service';
import { Documents } from '../filter/filter.types';

@Injectable()
export class DocumentEffects {
  constructor(private readonly actions$: Actions, private readonly documentService: DocumentsService) {}

  loadDocuments$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DocumentActions.loadDocuments),
      mergeMap(() =>
        this.documentService.getDocuments().pipe(
          map((documents: Documents[]) => DocumentActions.loadDocumentsSuccess({ documents })),
          catchError((error) => of(DocumentActions.loadDocumentsFailure({ error: error.message })))
        )
      )
    )
  );
}
