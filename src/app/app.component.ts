import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {XxxHeaderComponent} from './xxx-header/xxx-header.component';
import {XxxLoadingComponent} from './xxx-common/xxx-loading/xxx-loading.component';
import { XxxMenuComponent } from './xxx-menu/xxx-menu.component';
import { XxxFooterComponent } from './xxx-footer/xxx-footer.component';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        RouterOutlet,
        XxxHeaderComponent,
        XxxMenuComponent,
        XxxFooterComponent,
        XxxLoadingComponent
    ],
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
})
export class AppComponent {
}
