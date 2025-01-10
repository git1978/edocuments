import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FilterFacade } from '../filter.facade';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Compte, Devise, TypeDocument } from '../filter.types';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ComptesComponent } from '../../comptes/comptes.component';
import flatpickr from 'flatpickr';

@Component({
  selector: 'edocument-filter',
  standalone: true,
  imports: [CommonModule, ComptesComponent],
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'], // Fixed `styleUrl` to `styleUrls`
})
export class FilterComponent implements OnInit, AfterViewInit{
  filterForm: FormGroup;
  comptes$: Observable<Compte[]> | undefined;
  devises$: Observable<Devise[]> | undefined;
  typeDocuments$: Observable<TypeDocument[]> | undefined;
  loading$: Observable<boolean> | undefined;
  loaded$: Observable<boolean> | undefined;
  error$: Observable<any> | undefined;
  chips: { period?: string; currency?: string } = {};
  @ViewChild('dateRangeInput') dateRangeInput!: ElementRef;

  constructor(
    private readonly filterFacade: FilterFacade,
    private readonly fb: FormBuilder
  ) {
    this.filterForm = this.fb.group({
      documentType: [''],
      dateRange: [[new Date(), new Date()]],
      account: [''],
      period: [''],
      currency: [''],
      facture: [''],
    });
  }

  ngOnInit(): void {
    this.comptes$ = this.filterFacade.comptes$;
    this.devises$ = this.filterFacade.devises$;
    this.typeDocuments$ = this.filterFacade.typeDocuments$;
    this.loading$ = this.filterFacade.loading$;
    this.loaded$ = this.filterFacade.loaded$;
    this.error$ = this.filterFacade.error$;
  }

  ngAfterViewInit(): void {
    flatpickr(this.dateRangeInput.nativeElement, {
      mode: 'range',
      dateFormat: 'Y-m-d',
      onChange: (selectedDates) => {
        const [startDate, endDate] = selectedDates;
        // Update form values
        this.filterForm.patchValue({
          startDate: startDate,  // Bind start date
          endDate: endDate       // Bind end date
        });
      }
    });
    
  }

  updateChips(): void {
    const { period, currency } = this.filterForm.value;
    this.chips = {
      period: period || undefined,
      currency: currency || undefined,
    };
  }

  onSubmit(): void {
    if (this.filterForm.valid) {
      // Add the submission logic here if needed.
      console.log('Form submitted:', this.filterForm.value);
    }
  }
}

