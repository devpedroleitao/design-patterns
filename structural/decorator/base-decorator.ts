import { Component } from "./component";

export class BaseDecorator implements Component {
  wrappee: Component;

  constructor(wrappee: Component) {
    this.wrappee = wrappee;
  }

  execute() {
    this.wrappee.execute();
  }
}
