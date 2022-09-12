export{}
class auto {
    /* atributos */
    private marca : string;
    private modelo :  string;
    private anio : number;
    private color : string;
    private chasis : number;
    private esnuevo : boolean;

    /* constructor */
    constructor(paramMarca : string, paramModelo : string, paramAnio : number, paramColor : string, paramChasis : number, paramEsNuevo:boolean){

        this.marca = paramMarca;
        this.modelo = paramModelo;
        this.anio = paramAnio;
        this.color = paramColor;
        this.chasis = paramChasis;
        this.esnuevo = paramEsNuevo;
    };

    /* funciones */

    pedirMarca():string{
        return this.marca;
    };
    pedirModelo():string{
        return this.modelo;
    };
    pedirAnio():number{
        return this.anio;
    };
    pedirColor():string{
        return this.color;
    };
    pedirChasis():number{
        return this.chasis;
    };
    pedirEsNuevo():boolean{
        return this.esnuevo;
    };


};

class registroAutmotor{
    
};

/* creacion de hijos */

let auto1 = new auto("vw","gol",2012,"azul como el mar azul",123456,false);
let auto2 = new auto("fiat","argo",2022,"rojo pasion",123457,true);
let auto3 = new auto("chevrolet","corsa",2008,"amarillo patito",123458,false);
let auto4 = new auto("renault","logan ii",2020,"verde manzana",123459,true);
let auto5 = new auto("ford","fiesta kinetic", 2015,"negro como la noche",123460,false);



/* console logs */

console.log("----------------------");
console.log("los vehiculos cargados son:");
console.log(auto1, auto2, auto3, auto4, auto5);

/* funciones */
   
   
