class Persona {
    public edad : number;
    public altura : number;
    public genero : string;
    public nombre : string;
    public apellido : string;
    public numDocumento : number;
    public estaVivo : boolean;




    constructor(paramEdad: number,paramAltura : number, paramGenero : string, paramNombre: string, paramApellido: string, paramNumDocumento: number, paramEstaVivo:boolean){
        this.edad = paramEdad;
        this.altura = paramAltura;
        this.genero = paramGenero;
        this.nombre = paramNombre;
        this.apellido = paramApellido;
        this.numDocumento = paramNumDocumento;
        this.estaVivo = paramEstaVivo;
    };
}
 
let persona1 = new Persona (28,174,"masc","emiliano","gonzalez",38261313,true);
let persona2 = new Persona (33,178,"masc","javier","chavarria",123,true);
let persona3 = new Persona (43,160,"fem","erica","gram",12345,true);
let persona4 = new Persona (123,180,"masc","example","example",12,false)

console.log("las personas cargadas son las siguientes")
console.log("===================================================")
console.log(persona1,persona2,persona3,persona4);