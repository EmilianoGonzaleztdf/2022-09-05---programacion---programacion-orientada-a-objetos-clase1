var Persona = /** @class */ (function () {
    function Persona(paramEdad, paramAltura, paramGenero, paramNombre, paramApellido, paramNumDocumento, paramEstaVivo) {
        this.edad = paramEdad;
        this.altura = paramAltura;
        this.genero = paramGenero;
        this.nombre = paramNombre;
        this.apellido = paramApellido;
        this.numDocumento = paramNumDocumento;
        this.estaVivo = paramEstaVivo;
    }
    ;
    return Persona;
}());
var persona1 = new Persona(28, 174, "masc", "emiliano", "gonzalez", 38261313, true);
var persona2 = new Persona(33, 178, "masc", "javier", "chavarria", 123, true);
var persona3 = new Persona(43, 160, "fem", "erica", "gram", 12345, true);
var persona4 = new Persona(123, 180, "masc", "example", "example", 12, false);
console.log("las personas cargadas son las siguientes");
console.log("===================================================");
console.log(persona1, persona2, persona3, persona4);
