import { Login } from './login.interface';

export interface CreatePlan  {
    descricao: string,
    id?: number,
    login: Login,
    padrao?: true,
    tipoMovimento: string
}