
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