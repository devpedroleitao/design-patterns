import { Client } from "./client";
import { ThirdPartyService } from "./third-party.service";

export class ServiceAdapter implements Client {

    constructor(private service: ThirdPartyService) {}
    calculate(...numbers:number[]): number {
        return this.service.calculate(numbers);

    }
}
