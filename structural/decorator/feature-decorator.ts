import { BaseDecorator } from "./base-decorator";
import { Component } from "./component";

export class FeatureDecorator extends BaseDecorator implements Component {
    execute(): void {
        super.execute();
        this.featureLogic();
    }

    private featureLogic(): void {
        console.log('Feature logic');
    }

}
