export class ThirdPartyService {
    calculate(numberArray: number[]) {
        let result = 0;
        for (let i of numberArray) {
            result+= i;
        }
        return result;
    }
}
