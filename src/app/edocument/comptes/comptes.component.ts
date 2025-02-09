import { Component, Input, OnChanges, SimpleChanges, Renderer2, ElementRef, HostListener, Output, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { Compte } from '../filter/filter.types';
import { FormsModule } from '@angular/forms';
import { Observable, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'comptes',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './comptes.component.html',
  styleUrls: ['./comptes.component.scss'], // Fixed typo (was `styleUrl`)
})
export class ComptesComponent implements OnChanges {
  @Input() comptes: Compte[] = []; // Accepts a list of comptes as input
  @Output() accountSelected = new EventEmitter<string>(); // Emit selected account to parent
  @Output() onChanged = new EventEmitter<string>();
  @Input() clean$!: Observable<boolean>

  selectedAccount: string | null = null;
  selectedAccountFlag: string | null = null;
  isDropdownVisible: boolean = false;
  filteredComptes: Compte[] = []; // Initialize as empty
  searchTerm = '';
  private destroy$ = new Subject<void>(); // لإلغاء الاشتراك عند تدمير المكون

  constructor(private readonly elRef: ElementRef) {}


  // React to changes in `comptes` input
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['comptes'] && changes['comptes'].currentValue) {
      this.filteredComptes = [...this.comptes];
    }

    this.clean$
    .pipe(takeUntil(this.destroy$)) // إدارة دورة الحياة
    .subscribe((clean) => {
      if (clean) {
        this.selectedAccount = '';
        this.selectedAccountFlag = '';
      } else {
        console.log();
      }
    });
  }

  // Select account and close dropdown
  selectAccount(compte: Compte): void {
    this.isDropdownVisible = false;
    this.accountSelected.emit(compte.account);
    this.onChanged.emit(this.searchTerm);
    this.selectedAccount = compte.account; // Updated to show the label instead of account
    this.selectedAccountFlag = compte.account.substring(0, 2).toLowerCase();
  }

  toggleDropdown(): void {
    this.isDropdownVisible = !this.isDropdownVisible;
    if (!this.isDropdownVisible) {
      this.resetSearch();
    }
  }

  filterAccounts(): void {
    if (this.searchTerm.trim() === '') {
      this.filteredComptes = [...this.comptes]; // Reset to show all accounts
    } else {
      this.filteredComptes = this.comptes.filter(compte =>
        compte.label.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        compte.account.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }


  resetSelection(): void {
    this.selectedAccount = '';
    this.selectedAccountFlag = '';
    this.onChanged.emit(''); // Emit empty string to notify the parent
  }

  
  private resetSearch(): void {
    this.searchTerm = '';
    this.filteredComptes = [...this.comptes];
  }

  // Close dropdown when clicking outside
  @HostListener('document:click', ['$event.target'])
  onClickOutside(target: HTMLElement): void {
    const clickedInside = this.elRef.nativeElement.contains(target);
    if (!clickedInside) {
      this.isDropdownVisible = false;
      this.resetSearch();
    }
  }
}
