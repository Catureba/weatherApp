import { MeteorologicalEntity } from 'src/app/model/meteorological/meteorologicalEntity.model';

export class Pagination {
  totalRegisters!: number;
  totalPages!: number;
  atualPage!: number;
  data!: MeteorologicalEntity[];
}
