import { IGeo } from './IGeo';

export interface IAddress {
  street: string;
  suite: string;
  city: string;
  zipCode: string;
  geo: IGeo;
}
