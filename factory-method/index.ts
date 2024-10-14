import { ElectronicStore } from "./electronic-store";
import { Store } from "./store";
let store: Store;

store = new ElectronicStore();

const product = store.createProduct('pc', 500);

console.log(`Product with vat ${product.calculatePriceVat()}`);
