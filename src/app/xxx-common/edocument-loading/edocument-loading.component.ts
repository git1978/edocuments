import {ChangeDetectionStrategy, Component, ContentChild, Input, OnInit, TemplateRef} from '@angular/core';
import {MatProgressSpinner} from '@angular/material/progress-spinner';
import {AsyncPipe, NgTemplateOutlet} from '@angular/common';
import {Observable, tap} from "rxjs";
import {RouteConfigLoadEnd, RouteConfigLoadStart, Router} from "@angular/router";
import {EdocumentLoadingService} from "./edocument-loading.service";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        AsyncPipe,
        MatProgressSpinner,
        NgTemplateOutlet,
    ],
    selector: 'edocument-loading',
    standalone: true,
    styleUrl: './edocument-loading.component.scss',
    templateUrl: './edocument-loading.component.html',
})
export class EdocumentLoadingComponent implements OnInit {
    @ContentChild("loading") customLoadingIndicator: TemplateRef<any> | null = null;
    @Input() detectRouteTransitions = false;
    loading$: Observable<boolean>;

    constructor(
        private loadingService: EdocumentLoadingService,
        private router: Router) {
        this.loading$ = this.loadingService.loading$;
    }

    ngOnInit() {
        if (this.detectRouteTransitions) {
            this.router.events
                .pipe(
                    tap((event) => {
                        if (event instanceof RouteConfigLoadStart) {
                            this.loadingService.loadingOn();
                        } else if (event instanceof RouteConfigLoadEnd) {
                            this.loadingService.loadingOff();
                        }
                    })
                )
                .subscribe();
        }
    }
}
