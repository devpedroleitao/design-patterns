import { BaseDecorator } from "./base-decorator";
import { Component } from "./component";

export class CustomDecorator extends BaseDecorator implements Component {
    execute(): void {
       super.execute(); 
       this.customLogic();
    }

    private customLogic(): void {
        console.log('Custom Logic from Custom Decorator');
    }
}
