

export class Person {
/*     public name: string;
    private address: string;

    constructor( name: string, address: string ) {
        this.name = 'Celeste';
        this.address = 'Miau City';
    } */

    constructor( 
        public name: string,
        private address: string = 'No Address' 
    ) { }

}

export class Hero extends Person {

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
    ) {
        super( realName, 'Miau City' );
    }
}


const ironman = new Hero('Celeste',33,'Evan');

console.log(ironman);