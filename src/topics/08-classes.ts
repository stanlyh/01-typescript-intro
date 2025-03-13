

export class Person {
/*     public name: string;
    private address: string;

    constructor( name: string, address: string ) {
        this.name = 'Celeste';
        this.address = 'Miau City';
    } */

    constructor( 
        public firstName: string,
        public lastName: string,
        private address: string = 'No Address' 
    ) { }

}

/* export class Hero extends Person {

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
    ) {
        super( realName, 'Miau City' );
    }
}
 */

export class Hero {

    //public person: Person;

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person,
    ) {
        
        //this.person = new Person(realName);

    }
}

const evan = new Person('Evan','Kat','Miau City');
const ironman = new Hero('Celeste',33,'Evan', evan);

console.log(ironman);