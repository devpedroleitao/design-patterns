import { Employee } from "./employee";
import { Product } from "./product";

export interface Store {
    createProduct(name: string, price: number): Product;
    createEmployeee(name: string, baseSalary: number): Employee;
}
