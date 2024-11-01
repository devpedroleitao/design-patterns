import { Abstraction } from "./abstraction";
import { StaticRandomNumber } from "./static-random-number";

const implementation = new StaticRandomNumber();


const abstraction = new Abstraction(implementation);



const number = abstraction.createRandomNumber();
console.log(number);
