import { Implementation } from "./implementation";

export class StaticRandomNumber implements Implementation {
    generateRandomNumber(): number {
        return Math.floor(Math.random() * 50)
    }
}
