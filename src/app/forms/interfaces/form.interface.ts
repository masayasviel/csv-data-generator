import { EnableInputFormType } from '@global/constant-value';

/** random character form interface */
export interface RandomCharacterFormInterface {
  characterLength: number;
  options: string[];
}

/** column form option type */
export type ColumnFormOptionType = string | string[] | RandomCharacterFormInterface | null;

/** column form interface */
export interface ColumnFormInterface {
  columnType: EnableInputFormType;
  headerValue: string;
  option: ColumnFormOptionType;
}
