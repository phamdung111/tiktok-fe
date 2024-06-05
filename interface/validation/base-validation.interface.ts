export interface BaseValidationInterface {
  isFailed: boolean;
  message: string;
}

export type ObjectValidationInterface = Record<string, BaseValidationInterface>;

export interface ValidationError {
  path: string;
  message: string;
}
