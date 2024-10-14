import { Product } from "./product";

export abstract class Store {
    private version = '0.0.1';

    abstract createProduct(name: string, price: number): Product;

    printFactoryVersion() {
        console.log(`Version: ${this.version}`);
    }
}
