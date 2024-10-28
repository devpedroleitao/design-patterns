import { Clone } from "./clone";

export class Computer implements Clone {
    cpu: string;


    constructor(n: ThisParameterType<number>);
    constructor(cpu: string) {
        this.cpu = cpu;
    }

    clone(): Computer {
        return new Computer(this);
    }

}
