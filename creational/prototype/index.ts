import { Computer } from "./computer";

const object = new Computer('ryzen');
console.log(object);
const copy = object.clone();
copy.cpu = 'intel';

console.log(object);
console.log(copy);

