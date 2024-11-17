import { ConcreteComponent } from "./concrete-component";
import { CustomDecorator } from "./custom-decorator";
import { FeatureDecorator } from "./feature-decorator";

example1();
example2();
example3();
example4();
function example1() {
  console.log("Example 1: just component");
  const component = new ConcreteComponent();
  component.execute();
}
function example2() {
  console.log("Example 2: decorators: custom");
  let component = new ConcreteComponent();
  component = new CustomDecorator(component);
  component.execute();
}

function example3() {
  console.log("Example 3: decorators: custom + feature");
  let component = new ConcreteComponent();
  component = new CustomDecorator(component);
  component = new FeatureDecorator(component);
  component.execute();
}

function example4() {
  console.log("Example 3: decorators: feature + custom");
  let component = new ConcreteComponent();
  component = new FeatureDecorator(component);
  component = new CustomDecorator(component);
  component.execute();
}
