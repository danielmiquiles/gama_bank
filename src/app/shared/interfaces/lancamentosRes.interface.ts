import { Plans } from 'src/app/shared/interfaces/plans';

export interface LancamentosRes {
  id: number;
  data: string;
  valor: number;
  conta: number;
  descricao: string;
  planoConta: Plans;
  tipo: string;
}
