import { CommonModule } from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [RouterLink,CommonModule],
    selector: 'xxx-menu',
    standalone: true,
    styleUrl: './xxx-menu.component.scss',
    templateUrl: './xxx-menu.component.html',
})
export class XxxMenuComponent {
    activeMenu: string | null = null;

  toggleSubmenu(menu: string) {
    this.activeMenu = this.activeMenu === menu ? null : menu;
  }
}


