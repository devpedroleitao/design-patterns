import { Product } from "./product";

export class ElectronicProduct implements Product {
    constructor(public name: string, public price: number) {
    }

    calculatePriceVat() {
        return this.price * 1.23;
    }

}
