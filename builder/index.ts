import { PCBuilder } from "./pc.builder";

const builder = new PCBuilder();

builder.addCpu('ryzen 98003xd');
builder.addGraphicsCard('rtx 5090');
builder.addPowerSupply('asus rog thor');
builder.addMemory(32);
builder.addMotherboard('Asus TUF');

const product = builder.getResult();

console.log(product);

