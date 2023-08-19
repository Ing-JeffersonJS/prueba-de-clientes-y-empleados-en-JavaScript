
class persona {


    static contadorPersonas = 0;

        constructor(nombre, apellido,edad){
            this._idpersona = ++persona.contadorPersonas;
            this._nombre = nombre;
            this._apellido = apellido;
            this._edad = edad;
            
        }

        get idpersona(){
            return this._idpersona;
        }

        get nombre(){
            return this._nombre;
        }

        set nombre(nombre){
            this._nombre = nombre;
        }

        get apellido(){
            return this._apellido;
        }

        set apellido(apellido){
            this._apellido;
        }

        get edad(){
            return this._edad;
        }

        set edad(edad){
            this._edad;
        }

        toString(){
            return `${this._idpersona} ${this._nombre}
            ${this._apellido} ${this._edad}`;

        }

}



class Empleado extends persona{

    static contadorEmpleados = 0;

    constructor (nombre, apellido, edad, sueldo){
    super(nombre, apellido, edad);
    this._idEmpleado = ++ Empleado.contadorEmpleados;
    this._sueldo = sueldo;

    }

    get idEmpleado(){
        return this._idEmpleado;
    }

    get sueldo(){
        return this._sueldo;
    }

    set sueldo (sueldo){
        this._sueldo = sueldo;
    }

    toString(){
        return `${super.toString()}
        ${this._idEmpleado} ${this._sueldo}`;
    }
}


class Cliente extends persona{
    static contadorCliente = 0;

    constructor(nombre, apellido, edad, fecharegstro){
        super (nombre, apellido, edad);
        this._idCliente = ++Cliente.contadorCliente;
        this._fechaRegistro = fecharegstro;
    }

    get inCliente(){
        return this._idCliente;
    }

    get fechaRegistro(){
        return this._fechaRegistro;
    }

    set fechaRegistro(fechaRegstro){
        this._fechaRegistro = fechaRegstro;
    }

    toString(){
        return `${super.toString()} ${this._idCliente} 
        ${this._fechaRegistro}`;
    }
}

//Prueba de la clase persona

let persona1 = new persona ("Jefferson", "Jimenez", 30);
console.log(persona1.toString());

let persona2 = new persona ("Alicia", "Perez", 20);
console.log(persona2.toString());

let persona3 = new persona ("Carlos", "Perez", 19);
console.log (persona3.toString());

//Prueba de la clase Cliente

let empleado1 = new Empleado ("Pepito", "Perez", 25, 500000);
console.log(empleado1.toString());

let empleado2 = new Empleado ("Jefferson", "Jimenez", 30, 1200000);
console.log(empleado2.toString());