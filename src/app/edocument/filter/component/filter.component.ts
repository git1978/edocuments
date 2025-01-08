import { Component, OnInit } from '@angular/core';
import { FilterFacade } from '../filter.facade';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs/internal/Observable';
import { Compte, Devise, TypeDocument } from '../filter.types';
import { Store } from '@ngrx/store';
import { FilterActions } from '../filter.actions';
import { selectComptes } from '../filter.selectors';

@Component({
  selector: 'edocument-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent implements OnInit {
  chips: { label: string; color: string }[] = [
  ];
      comptes$: Observable<Compte[]> | undefined;  // Déclaration des variables sans initialisation
      devises$: Observable<Devise[]> | undefined;
      typeDocuments$: Observable<TypeDocument[]> | undefined;
      loading$: Observable<boolean> | undefined;
      loaded$: Observable<boolean> | undefined;
      error$: Observable<any> | undefined;

   
  
    constructor(private filterFacade: FilterFacade) {}
  
    ngOnInit() {
      this.comptes$ = this.filterFacade.comptes$; 
      this.devises$ = this.filterFacade.devises$; 
      this.typeDocuments$ = this.filterFacade.typeDocuments$; 
    }

  onSelect(event: Event, field: string) {
    const target = event.target as HTMLInputElement | HTMLSelectElement;
    const value = target.value;

    // Generate a random color for the chip
    const color = `hsl(${Math.random() * 360}, 70%, 50%)`;

    // Check if chip already exists
    const existingChip = this.chips.find((chip) => chip.label === value);
    if (!existingChip) {
      this.chips.push({ label: value, color });
    }
  }
}
