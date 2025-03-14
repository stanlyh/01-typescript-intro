


export function whatMyType<T>( argument: T ): T {

    return argument;
}

const amIString =  whatMyType<string>('Hola Celeste');
const amINumber =  whatMyType<number>(333);
const amIArray =  whatMyType<number[]>([1,2,3,4,5]);


console.log( amIString.split(' ') );
console.log( amINumber.toFixed() );
console.log( amIArray.join('*') );