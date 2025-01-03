
export const filterFeatureName = 'filter';


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

export interface Document {
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

