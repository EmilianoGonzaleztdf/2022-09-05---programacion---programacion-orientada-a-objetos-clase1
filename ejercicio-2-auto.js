"use strict";
exports.__esModule = true;
var auto = /** @class */ (function () {
    /* constructor */
    function auto(paramMarca, paramModelo, paramAnio, paramColor, paramChasis, paramEsNuevo) {
        this.marca = paramMarca;
        this.modelo = paramModelo;
        this.anio = paramAnio;
        this.color = paramColor;
        this.chasis = paramChasis;
        this.esnuevo = paramEsNuevo;
    }
    ;
    /* funciones */
    auto.prototype.pedirMarca = function () {
        return this.marca;
    };
    ;
    auto.prototype.pedirModelo = function () {
        return this.modelo;
    };
    ;
    auto.prototype.pedirAnio = function () {
        return this.anio;
    };
    ;
    auto.prototype.pedirColor = function () {
        return this.color;
    };
    ;
    auto.prototype.pedirChasis = function () {
        return this.chasis;
    };
    ;
    auto.prototype.pedirEsNuevo = function () {
        return this.esnuevo;
    };
    ;
    return auto;
}());
;
var registroAutmotor = /** @class */ (function () {
    function registroAutmotor() {
    }
    return registroAutmotor;
}());
;
/* creacion de hijos */
var auto1 = new auto("vw", "gol", 2012, "azul como el mar azul", 123456, false);
var auto2 = new auto("fiat", "argo", 2022, "rojo pasion", 123457, true);
var auto3 = new auto("chevrolet", "corsa", 2008, "amarillo patito", 123458, false);
var auto4 = new auto("renault", "logan ii", 2020, "verde manzana", 123459, true);
var auto5 = new auto("ford", "fiesta kinetic", 2015, "negro como la noche", 123460, false);
/* console logs */
console.log("----------------------");
console.log("los vehiculos cargados son:");
console.log(auto1, auto2, auto3, auto4, auto5);
/* funciones */
