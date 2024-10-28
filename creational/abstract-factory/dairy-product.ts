import { Product } from "./product";

export class DairyProduct implements Product {
    constructor(public name: string, public price: number) {}

    calculatePriceVat() {
        return this.price * 1.06;
    }
}
