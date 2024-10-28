import { ElectronicProduct } from "./electronic-product";
import { Product } from "./product";
import { Store } from "./store";

export class ElectronicStore extends Store {
    createProduct(name: string, price: number): Product {
        return new ElectronicProduct(name, price);
    }
}
