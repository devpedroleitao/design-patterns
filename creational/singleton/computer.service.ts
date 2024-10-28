export class ComputerService {
  static instance: ComputerService;
  private internalProp = 'hello';

  private constructor() {}

  static getInstance() {
    if(!this.instance) {
        return this.instance = new ComputerService();
    }
    return this.instance;
  }

  printInternalProp() {
      console.log(this.internalProp);
  }
}
