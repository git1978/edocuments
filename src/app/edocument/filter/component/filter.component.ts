import { Component, OnInit } from '@angular/core';
import { FilterFacade } from '../filter.facade';
import { CommonModule } from '@angular/common';

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

    comptes$ = this.filterFacade.comptes$;
    devises$ = this.filterFacade.devises$;
    typeDocuments$ = this.filterFacade.typeDocuments$;
    loading$ = this.filterFacade.loading$;
    loaded$ = this.filterFacade.loaded$;  // Nouveau indicateur
    error$ = this.filterFacade.error$;
  
    constructor(private filterFacade: FilterFacade) {}
  
    ngOnInit() {
      this.filterFacade.loadComptes();
      this.filterFacade.loadDevises();
      this.filterFacade.loadTypeDocuments();
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
