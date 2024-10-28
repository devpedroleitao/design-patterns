interface Builder {
    addPowerSupply(name: string): Builder;
    addCpu(name: string): Builder;
    addMotherboard(name: string): Builder;
    addMemory(ammount: number): Builder;
    addGraphicsCard(name:string): Builder;
}

export type { Builder };
