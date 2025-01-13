import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'typeDocument',
  standalone: true,
})
export class typeDocumentPipe implements PipeTransform {
  transform(value: string): string {
    switch (value) {
      case 'fct':
        return 'Facture';
      case 'rlv-vi':
        return 'Relevés de virements internationaux';
      case 'rlv-com-cf':
        return 'Relevés de commissions sur caution France';
      case 'rlv-sa':
        return 'Relevés de compte et synthèses d\'activité';
      case 'ech-rlvi':
        return 'Echelles et relevés d\'intérêts';
      case 'rlv-mn':
        return 'Relevés monétiques (remises)';
      case 'dct-oc':
        return 'Décomptes d\'opérations cartes (transactions)';
      default:
        return 'Unknown'; // Fallback for unrecognized values
    }
  }
}
