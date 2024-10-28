import { Computer } from "./computer";
import { Builder } from "./computer.builder";

export class PCBuilder implements Builder {
  private result!: Computer;

  constructor() {
      this.reset();
  }

  public reset() {
      this.result = new Computer();
  } 
  addCpu(name: string): Builder {
    this.result.cpu = name;
    return this;
  }
  addMemory(ammount: number): Builder {
    this.result.memory = ammount;
    return this;
  }

  addMotherboard(name: string): Builder {
    this.result.motherBoard = name;
    return this;
  }

  addPowerSupply(name: string): Builder {
    this.result.powerSupply = name;
    return this;
  }
  addGraphicsCard(name: string): Builder {
    this.result.graphicsCard = name;
    return this;
  }

  getResult(): Computer {
    return this.result;
  }
}
