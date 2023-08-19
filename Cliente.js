
class Cliente extends persona{
    static contadorCliente = 0;

    constructor(fechaderegstro){
        this._idCliente = ++Cliente.contadorCliente;
        this._fechaRegistro = fechaderegstro;
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