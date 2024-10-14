import { DairyStore } from "./dairy-product-store";
import { ElectronicStore } from "./electronic-store";
import { Store } from "./store";
let store: Store;


const storeType = 'electronic';


if (storeType === 'electronic') {
    store = new ElectronicStore();

}
else {
    store = new DairyStore();
}

const employee = store.createEmployeee('Joao', 2000);
const product = store.createProduct('Hardware', 1000);

console.log(`product vat ${product.calculatePriceVat()}`);
console.log(`employee salary ${employee.getSalaryAfterDiscounts()}`);
