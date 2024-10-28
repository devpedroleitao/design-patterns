import { DairyManager } from "./dairy-manager";
import { DairyProduct } from "./dairy-product";
import { Employee } from "./employee";
import { Store } from "./store";

export class DairyStore implements Store {
    createProduct(name: string, price: number) {
        return new DairyProduct(name, price);
    }

    createEmployeee(name: string, baseSalary: number): Employee {
        return new DairyManager(name, baseSalary);
    }
}
