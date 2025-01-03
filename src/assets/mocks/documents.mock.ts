import { Document, DownloadLink } from '../../src/app/books/models/documents.model';

export const mockDocuments: Document[] = [
  {
    documentId: '1',
    locationId: 'loc1',
    familyCode: 'fam1',
    docTypeNet: 'net1',
    docTypeGdn: 'gdn1',
    productionDate: '2024-01-01',
    contractCategory: 'cat1',
    contractNumber: '1234',
    secondaryRib: 'rib1',
    accountType: 'acc1',
    bankStatementType: 'stmt1',
    consultationIndicator: 'indicator1',
    firstConsultationDate: null,
    lastConsultationDate: null,
    complementaryReference: 'ref1',
    endValidityDate: '2024-12-31',
    documentPeriodicity: 'ANNUAL',
    documentTitle: 'Document 1',
    documentNature: 1,
    sizeDocument: '10MB',
    pageNumber: 5,
    language: 'EN',
    sortType: 'asc',
    stateCodeReference: 'refState',
    groupId: 'group1',
    currency: 'USD',
    iup: 'iup1',
    viewed: false
  }
];

export const mockDownloadLink: DownloadLink = {
  requestId: 1,
  status: 'completed',
  totalRequestedDocument: 1,
  totalTreatedDocument: 1,
  url: 'http://example.com/download',
  token: 'abc123',
  observation: []
};
