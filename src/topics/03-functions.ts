

function addNumbers( a:number, b:number ):number {
    return a + b;
}

const addNumbersArrow = ( a: number, b:number ): string => {
    return `${ a + b }`;
}

function multiply( firstNumber:number, secondNumber?:number, base:number = 2 ) {
    return firstNumber * base;
}



const result: number = addNumbers(7, 9);
const result2: string = addNumbersArrow(7, 9);
const multiplyResult: number = multiply(5);

console.log({ result, result2, multiplyResult });



export {};