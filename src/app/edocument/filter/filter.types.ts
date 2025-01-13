import { AbstractControl } from "@angular/forms";

export const filterFeatureName = 'filter';

export const listeDocuments = 'listeDocuments';


export interface SearchCriteria {
  documentType: string;
  dateRange: Date[];
  account: string;
  period: string;
  currency: string;
  facture: string;
}


export interface Compte {
  id: number;
  value: string;
  label: string;
  account: string;
  amount: number;
}

export interface Devise {
  id: number;
  currency: string;
  country: string;
  countryCode: string;
}

export interface Option {
  value: string;
  label: string;
}

export interface TypeDocument {
  label: string;
  options: Option[];
}


export interface CompteResponse {
  comptes: {
    data: Compte[];
  };
}

export interface DeviseResponse {
  devises: {
    data: Devise[];
  };
}

export interface TypeDocumentResponse {
  types: {
    data: TypeDocument[];
  };
}

export interface DocumentsResponse {
  documents: {
    data: Documents[];
  };
}

export interface Documents {
  documentId: string;
  locationId: string;
  familyCode: string;
  docTypeNet: string;
  docTypeGdn: string;
  productionDate: string;
  contractCategory: string;
  contractNumber: string;
  label: string;
  secondaryRib: string;
  releveType: string;
  consultationIndicator: string;
  firstConsultationDate: string;
  lastConsultationDate: string;
  complementaryReference: string;
  endValidityDate: string;
  documentPeriodicity: string;
  documentTitle: string;
  documentNature: number;
  sizeDocument: string;
  pageNumber: number;
  language: string;
  sortType: string;
  stateCodeReference: string;
  groupId: string;
  devise: string;
  iup: string;
  viewed: boolean;
  bankStatementType: string;
}



// Interface pour le formulaire par défaut
export interface DefaultDocForm {
  facture: AbstractControl<string>;
  contrat: AbstractControl<string>;
  account: AbstractControl<Compte>;
  dateForm: AbstractControl<Date[]>;
  devise: AbstractControl<Devise>;
 // periodicite: AbstractControl<DropdownItem>;
  //typeDocFilter: AbstractControl<DropdownItem>;
}

// Interface pour le formulaire de document avec des champs optionnels
export interface DocumentForm {
  facture?: string;
  contrat?: string;
  accounts?: Compte[];
  dateForm?: Date[];
  devise?: Devise;
  //periodicite?: DropdownItem;
  //typeDocFilter?: DropdownItem;
  //currency?: DropdownItem;
}
