import { EmployeeDTO } from "./employeesdto";

export interface Departement {
    id: number;
    name: string;
    employees: EmployeeDTO[];
  }