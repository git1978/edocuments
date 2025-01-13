import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FilterFacade } from '../filter.facade';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Compte, Devise, Documents, SearchCriteria, TypeDocument } from '../filter.types';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ComptesComponent } from '../../comptes/comptes.component';
import flatpickr from 'flatpickr';
import { DocumentsListComponent } from "../../documents-list/component/documents-list.component";
import { DocumentFacade } from '../../documents-list/document-liste.facade';
import { typeDocumentPipe } from "../../pipe/typeDocument.pipe";

@Component({
  selector: 'edocument-filter',
  standalone: true,
  imports: [CommonModule, ComptesComponent, DocumentsListComponent, ReactiveFormsModule, typeDocumentPipe],
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'], // Fixed `styleUrl` to `styleUrls`
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // Allow custom elements

})
export class FilterComponent implements OnInit, AfterViewInit{
  filterForm: FormGroup;
  comptes$: Observable<Compte[]> | undefined;
  devises$: Observable<Devise[]> | undefined;
  typeDocuments$: Observable<TypeDocument[]> | undefined;
  loading$: Observable<boolean> | undefined;
  loaded$: Observable<boolean> | undefined;
  error$: Observable<any> | undefined;
  dateRange: string | null = null; // Store the selected date range

  

  documents$: Observable<Documents[]> = this.documentFacade.documents$;
  loadingList$: Observable<boolean> | undefined = this.documentFacade.loading$;
  errorList$: Observable<any> | undefined = this.documentFacade.error$;
  chips: Array<{
    type: string; label: string, value: string, bgColor: string 
}> = [];


  @ViewChild('dateRangeInput') dateRangeInput!: ElementRef;



  constructor(
    private readonly filterFacade: FilterFacade,
    private readonly fb: FormBuilder,
    private readonly documentFacade: DocumentFacade
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

// Update the selected date range
  updateDateRange(value: string): void {
    this.dateRange = value; // Assign the input value to the dateRange
  }


  addToListChip(): void {
    // Clear previous chips
    this.chips = [];
  
    // Iterate through the form values and add them to chips if they have a value
    const formValues = this.filterForm.value;
    
    if (formValues.account) {
      this.addChip('account', formValues.account);
    }
    
    if (formValues.currency) {
      this.addChip('currency', formValues.currency);
    }
  
    if (formValues.documentType) {
      this.addChip('documentType', formValues.documentType);
    }
  
    if (formValues.facture) {
      this.addChip('facture', formValues.facture);
    }
  
    if (formValues.period) {
      this.addChip('period', formValues.period);
    }

    if (formValues.dateRange) {
      this.addChip('dateRange', formValues.dateRange);
    }
  }
  
  private addChip(type: string, value: string): void {
    // Avoid adding duplicates
    if (!this.chips.some(chip => chip.type === type && chip.label === value)) {
      this.chips.push({
        label: value, type: type,
        value: '',
        bgColor: ''
      });
    }
  }

  removeChip(chip: any): void {
    // Remove the chip from the array
    this.chips = this.chips.filter(c => c !== chip);

    // Check the type of the chip and reset corresponding fields
    switch (chip.type) {
      case 'currency':
        this.filterForm.get('currency')?.setValue(''); // Reset currency form control
        break;
      case 'period':
        this.filterForm.get('period')?.setValue(''); // Reset period form control
        break;
      case 'facture':
        this.filterForm.get('facture')?.setValue(''); // Reset facture form control
        break;
      case 'account':
        this.filterForm.get('account')?.setValue(''); // Reset account form control
        break;
      case 'documentType':
        this.filterForm.get('documentType')?.setValue(''); // Reset document type form control
        break;
      default:
        break;
    }
  }

  ngAfterViewInit(): void {
    flatpickr(this.dateRangeInput.nativeElement, {
      mode: 'range',
      dateFormat: 'Y-m-d',  
      defaultDate: [new Date(), new Date()],
      onChange: (selectedDates: Date[]) => {
        const [startDate, endDate] = selectedDates;
  
        // Safely update the form values using patchValue
        this.filterForm.patchValue({
          dateRange: selectedDates, // Assuming dateRange is an array [startDate, endDate]
          startDate: startDate,     // Separate control for startDate if needed
          endDate: endDate          // Separate control for endDate if needed
        });
      },
    });
  }
  

  onSubmit(): void {
    if (this.filterForm.valid) {
      console.log('Form submitted:', this.filterForm.value);
      this.documentFacade.loadDocuments(this.filterForm.value as SearchCriteria);
    }
  }
}

