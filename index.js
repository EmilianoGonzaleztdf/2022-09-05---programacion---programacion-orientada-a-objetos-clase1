var Televisor = /** @class */ (function () {
    function Televisor(paramPrendido, paramVolumen, paramCanal, paramModelo, paramMarca, paramPulgadas) {
        this.estaPrendido = paramPrendido;
        this.volumenActual = paramVolumen;
        this.canalActual = paramCanal;
        this.modelo = paramModelo;
        this.marca = paramMarca;
        this.pulgadas = paramPulgadas;
    }
    Televisor.prototype.prenderApagar = function () {
        if (this.estaPrendido === true) {
            this.estaPrendido = false;
        }
        else {
            this.estaPrendido = true;
        }
    };
    Televisor.prototype.obtenerVolumen = function () {
        return this.volumenActual;
    };
    Televisor.prototype.subirVolumen = function () {
        this.volumenActual = this.volumenActual++;
    };
    Televisor.prototype.bajarVolumen = function () {
        this.volumenActual = this.volumenActual--;
    };
    return Televisor;
}());
var primerTelevisor = new Televisor(true, 5, 10, "sarasa", "sony", 42);
var segundoTelevisor = new Televisor(true, 5, 10, "sarasa", "sony", 42);
