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