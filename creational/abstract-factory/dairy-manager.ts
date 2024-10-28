import { Employee } from "./employee";

export class DairyManager implements Employee {
    constructor(public name: string, public baseSalary: number) {}

    getSalaryAfterDiscounts(): number {
        return this.baseSalary * 0.75;
    }
}
