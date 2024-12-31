import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [RouterLink],
    selector: 'xxx-footer',
    standalone: true,
    styleUrl: './xxx-footer.component.scss',
    templateUrl: './xxx-footer.component.html',
})
export class XxxFooterComponent {
    currentYear: number = new Date().getFullYear();
    currentDay: string = new Date().toLocaleDateString('en-US', { weekday: 'long' });  // Get the current day of the week
}
