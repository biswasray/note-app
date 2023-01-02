import { alertVariant } from "../constants/alert";

export interface IAlert {
  variant?: keyof typeof alertVariant;
  show?: boolean;
  head?: string;
  body: string;
  extra?: string;
  timeout?: number;
}
