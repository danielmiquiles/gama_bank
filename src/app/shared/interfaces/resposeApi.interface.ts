import { Conta } from './conta.interface';
import { ContaCredito } from './contaCredito.interface';
import { User } from './user.interface';

export interface ResponseAPI{
    token: string;
    usuario: User;
    conta: Conta;
    contaCredito: ContaCredito;
}