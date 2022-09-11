class Televisor {
    public estaPrendido : boolean;
    public volumenActual : number;
    public canalActual : number;
    public modelo : string;
    public marca : string;
    public pulgadas : number;



    constructor (paramPrendido:boolean, paramVolumen:number, paramCanal:number, paramModelo:string, paramMarca:string, paramPulgadas:number){
        this.estaPrendido = paramPrendido;
        this.volumenActual = paramVolumen;
        this.canalActual  = paramCanal;
        this.modelo = paramModelo;
        this.marca = paramMarca;
        this.pulgadas = paramPulgadas;
    }   
    

        prenderApagar (): void{
            if (this.estaPrendido===true){
                this.estaPrendido=false;
            }else{
                this.estaPrendido=true;
            }
        }

        obtenerVolumen (): number{
            return this.volumenActual;
        }

        subirVolumen():void {
            this.volumenActual = this.volumenActual++;
        }
        
        bajarVolumen():void {
            this.volumenActual  = this.volumenActual--;
        }

}

let primerTelevisor = new Televisor(true,5,10,"sarasa","sony",42);
let segundoTelevisor = new Televisor(true,5,10,"sarasa","sony",42);
