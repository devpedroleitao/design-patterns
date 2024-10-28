import { ElectronicManager } from "./electronic-manager";
import { ElectronicProduct } from "./electronic-product";
import { Employee } from "./employee";
import { Product } from "./product";
import { Store } from "./store";

export class ElectronicStore implements Store {
    createProduct(name: string, price: number): Product {
        return new ElectronicProduct(name, price);
    }
    createEmployeee(name: string, baseSalary: number): Employee {
        return new ElectronicManager(name, baseSalary);
    }
}
