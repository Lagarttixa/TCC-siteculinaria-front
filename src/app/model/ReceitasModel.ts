import { IngredienteModel } from './IngredientesModel';
export interface ReceitasModel {
  id?: string;
  nome: string;
  tempoPreparo?: string;
  rendimentoQuantidade?: string;
  ingredientes: IngredienteModel[];
  modoPreparo: string;
  info:string;
}
