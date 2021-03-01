import { LancamentosRes } from './lancamentosRes.interface';

export interface ResponseDash {
  contaBanco: {
    saldo: number;
    id: number;
    lancamentos: LancamentosRes;
  };
  contaCredito: {
    saldo: number;
    id: number;
    lancamentos: LancamentosRes;
  };
}
