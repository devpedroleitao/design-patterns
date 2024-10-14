export interface Product {
    name: string;
    price: number;
    calculatePriceVat: () => number;
}
