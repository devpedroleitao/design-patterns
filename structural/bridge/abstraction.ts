import { Implementation } from "./implementation";

export class Abstraction {

    constructor(private implementation: Implementation) {}


    createRandomNumber() {
        return this.implementation.generateRandomNumber();
    }
}
