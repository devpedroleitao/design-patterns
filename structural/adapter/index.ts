import { Client } from "./client";
import { ServiceAdapter } from "./service.adapter";
import { ThirdPartyService } from "./third-party.service";

const thirdPartyService = new ThirdPartyService();
const adapter: Client = new ServiceAdapter(thirdPartyService);

const result = adapter.calculate(5,5,5);
console.log(result);
