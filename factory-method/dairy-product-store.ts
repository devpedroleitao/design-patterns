import { DairyProduct } from "./dairy-product";
import { Store } from "./store";

export class DairyProductFactory extends Store {
    createProduct(name: string, price: number) {
        return new DairyProduct(name, price);
    }
}
