class Persona {

    constructor(pNombre, pApellidos) {
        this._nombre = pNombre;
        this.apellidos = pApellidos;
    }

    get nombre() {
        return this._nombre.toUpperCase();
    }

    hablar() {
        return `Me llamo ${this.nombre} ${this.apellidos}`;
    }

}

class Adulto extends Persona {

    constructor(pNombre, pApellidos, pCoche) {
        super(pNombre, pApellidos);
        this.coche = pCoche;
    }

}

class Nino extends Persona {

    constructor(pNombre, pApellidos, pColegio) {
        super(pNombre, pApellidos);
        this.colegio = pColegio;
    }

}

let p = new Persona('Mario', 'Girón'); // { }
let p2 = new Persona('Rosa', 'Diaz');

console.log(p.hablar());
console.log(p2.hablar());

let adul = new Adulto('Ramiro', 'Rodríguez', true);

console.log(adul.nombre);
adul.nombre = 'Rocío';

console.log(adul.hablar());

let n = new Nino('Hugo', 'Martín', 'Colegio Guay');
console.log(n);

