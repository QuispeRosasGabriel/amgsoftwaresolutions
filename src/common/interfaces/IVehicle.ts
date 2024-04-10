import { Dayjs } from "dayjs";

export interface IVehicle {
  id: number;
  brand: string;
  model: string;
  price?: number;
  km?: number;
  year: Dayjs;
  concession: string;
}
