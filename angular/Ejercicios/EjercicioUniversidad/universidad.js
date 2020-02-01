class Profesor {
    constructor(pNombre, pApellidos, pExperiencia) {
        this.nombre = pNombre;
        this.apellidos = pApellidos;
        this.experiencia = pExperiencia;
    }

    mostrarProfesor() {
        return `PROFESOR (nombre: ${this.nombre}, apellidos: ${this.apellidos}, experiencia: ${this.experiencia})`;
    }
}

class Asignatura {
    constructor(pNombre, pProfesor) {
        this.nombre = pNombre;
        this.profesor = pProfesor;
    }

    mostrarAsignatura(muestraProfesor) {
        let resultado = `ASIGNATURA (nombre: ${this.nombre})`;
        if (muestraProfesor) {
            resultado += this.profesor.mostrarProfesor();
        }
        return resultado;
    }
}

class Estudiante {
    constructor(pNombre, pApellidos) {
        this.nombre = pNombre;
        this.apellidos = pApellidos;
        this.asignaturas = [];
    }

    agregarAsignatura(asignatura) {
        this.asignaturas.push(asignatura);
    }

    mostrarEstudiante() {
        let resultado = `ESTUDIANTE (nombre: ${this.nombre}, apellidos: ${this.apellidos})\n`;
        for (let asig of this.asignaturas) {
            resultado += asig.mostrarAsignatura(true);
        }
        return resultado;
    }
}

let profesor1 = new Profesor('Ramón', 'García', 5)
let profesor2 = new Profesor('Rosa', 'Martinez', 9)
// console.log(profesor1.mostrarProfesor());
// console.log(profesor2.mostrarProfesor());

let algebra = new Asignatura('Álgebra', profesor1)
let electronica = new Asignatura('Electrónica', profesor2)
let fisica = new Asignatura('Física', profesor2)

// console.log(algebra.mostrarAsignatura(false));
// console.log(electronica.mostrarAsignatura(true));
// console.log(fisica.mostrarAsignatura(true));

let estudiante1 = new Estudiante('Pepe', 'Ortiz')
let estudiante2 = new Estudiante('Ana', 'Jiménez')
let estudiante3 = new Estudiante('Lola', 'López')

estudiante1.agregarAsignatura(algebra)
estudiante1.agregarAsignatura(fisica)
estudiante2.agregarAsignatura(electronica)
estudiante3.agregarAsignatura(algebra)
estudiante3.agregarAsignatura(electronica)
estudiante3.agregarAsignatura(fisica)

console.log(estudiante1.mostrarEstudiante());
console.log(estudiante2.mostrarEstudiante());
console.log(estudiante3.mostrarEstudiante());