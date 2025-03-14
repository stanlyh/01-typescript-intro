
export interface Passenger {
    name:string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Cristal',
}

const passenger2: Passenger = {
    name: 'Celeste',
    children: ['Evangeline', 'Cristal'],
}

const printChildren = ( passenger: Passenger ): number => {

    const howManyChildren = passenger.children?.length || 0;  //optional chaining operator
    //const howManyChildren = passenger.children!.length;  //non-null assertion operator

    console.log(passenger.name, howManyChildren);

    return howManyChildren;
}


printChildren( passenger2 );
