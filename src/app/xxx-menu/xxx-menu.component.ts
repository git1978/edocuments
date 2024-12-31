import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [RouterLink],
    selector: 'xxx-menu',
    standalone: true,
    styleUrl: './xxx-menu.component.scss',
    templateUrl: './xxx-menu.component.html',
})
export class XxxMenuComponent {
}
