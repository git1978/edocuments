import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Router, RouterLink} from '@angular/router';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [RouterLink],
    selector: 'xxx-header',
    standalone: true,
    styleUrl: './xxx-header.component.scss',
    templateUrl: './xxx-header.component.html',
})
export class XxxHeaderComponent {
  userInfo: string = 'YOUNESS ABACH - BH2373243 - DERNIÈRE CONNEXION LE 12/01/2025 À 08:49:20';

  constructor(private router: Router) {}

  changeLanguage(language: string): void {
    console.log('Language changed to:', language);
  }

  logout(): void {
    // Handle the logout functionality (e.g., clearing session, redirecting, etc.)
    console.log('User logged out');
    // Example: this.authService.logout();
    this.router.navigate(['/logout']);
  }
}
