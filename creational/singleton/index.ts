import { ComputerService } from "./computer.service";

const computerService = ComputerService.getInstance();
computerService.printInternalProp();
