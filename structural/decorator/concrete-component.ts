import { Component } from "./component";

export class ConcreteComponent implements Component {
    execute(): void {
        console.log('Concrete implementation');
    }
}
