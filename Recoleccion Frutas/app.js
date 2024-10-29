class Personaje{
    constructor(nombre,tipo){
        this.nombre = `${nombre} - ${tipo}`;
        this.energia = Math.floor(Math.random()*(90-60+1)+60);
        this.recoleccion = Math.floor(Math.random()*(6-2+1)+2);
        this.frutaRecogida = 0;
    }

    recolectar(){
        const frutaTurno = Math.floor(Math.random()*(this.recoleccion+1)+1)
        this.frutaRecogida += frutaTurno;

        const energiaGastada = Math.floor(Math.random()*(4-1+1)+1);
        this.energia -= energiaGastada;

        console.log(`${this.nombre} ha recogido ${frutaTurno} y ha gastado ${energiaGastada} de energía, le queda ${this.energia}`)

        if(this.energia<0){
            this.energia=0;
        }
    }
    
    
}
function competencia(p1,p2){
    var turnos = 10;
    while(turnos>0){
        p1.recolectar();
        p2.recolectar();
        turnos-=1;
        console.log("-------------");
    }

    if(p1.frutaRecogida>p2.frutaRecogida){
        console.log(`HA GANADO ${p1.nombre} con un total de ${p1.frutaRecogida}`)
        console.log(`La cantidad de ${p2.nombre} es de ${p2.frutaRecogida}`)
    }else{
        console.log(`HA GANADO ${p2.frutaRecogida} con un total de ${p2.frutaRecogida}`)
        console.log(`La cantidad de ${p1.nombre} es de ${p1.frutaRecogida}`)
    }
}

const conejo = new Personaje("Luis","Conejo")
const ardilla = new Personaje("Pepa","Ardilla")

competencia(conejo,ardilla)