class Auto{
    constructor(nombre,tipo){
        this.nombre = `${nombre} - ${tipo}`;
        this.velocidad = Math.floor(Math.random()*(120-80+1)+80);
        this.combustibleInicial = Math.floor(Math.random()*(30-20+1)+20);
        this.vueltas = 0;
    }

    darVuelta(){
        if(this.combustibleInicial>0){
            this.vueltas +=1;
            //Calcular el consumo de combustible para esta vuelta
        const combustibleGastado = Math.floor(Math.random()*(10-5+1)+5);
        this.combustibleInicial -= combustibleGastado;

        //Evitar que el combustible sea negativo
        if(this.combustibleInicial<0){
            this.combustibleInicial = 0;
        }

        console.log(`${this.nombre} ha completado la vuelta ${this.vueltas}`)
        }else{
            console.log(`${this.nombre} se ha quedado sin combustible y no puede continuar`)
        }

        

    }
}

function carrera(coche1,coche2){
    const vueltasMaximas = 5;
    for (let i = 0; i < vueltasMaximas; i++) {
        console.log(`Vuelta - ${(i+1)} combustible coche1 ${coche1.combustibleInicial} coche2 ${coche2.combustibleInicial}`)
        coche1.darVuelta();
        coche2.darVuelta();
        if(coche1.combustibleInicial<=0 && coche2.combustibleInicial<=0){
            console.log("Ambos coches se han quedado sin gasolina")
            break;
        }
    }

    if(coche1.vueltas>coche2.vueltas){
        console.log(`${coche1.nombre} ha ganado la carrera completó ${coche1.vueltas} vueltas`)
    }else if(coche1.vueltas<coche2.vueltas){
        console.log(`${coche2.nombre} ha ganado la carrera completó ${coche2.vueltas} vueltas`)
    }else{
        console.log("Ha habido un empate, los dos completaron el mismo numero de vueltas")
    }
}

const coche1 = new Auto("Ferrari","Deportivo")
const coche2 = new Auto("Peugeot","Monovolumen")

carrera(coche1,coche2)