class Animales{
    constructor(nombre,tipo){
        this.nombre = `${nombre} - ${tipo}`;
        this.energia = Math.floor(Math.random()*(80-50+1)+50);
        this.avance = Math.floor(Math.random()*(10-5+1)+5);
        this.distancia = 0; //distancia recorrida incial
    }

    avanzar(){
        //Hay que calcular un avance aleatorio y una energia aleatorio porque esto es por cada turno porque si no tiene siempre los mismos valores
        const distanciaAvanzada = Math.floor(Math.random()*(this.avance +1))
        this.distancia += distanciaAvanzada;

        //Reducir la energia del personaje en una cantidad aleatoria de entre 1 y 5
        const energiaConsumida = Math.floor(Math.random()*(5-1+1)+1)
        this.energia -= energiaConsumida;

        if(this.energia<0){
            this.energia = 0;
        }
        console.log(`El ${this.nombre} avanzó un total de ${distanciaAvanzada} - distancia total recorrida ${this.distancia} y tiene de energía ${this.energia}`)
    }
}

function carrera(personaje1,personaje2){
    const meta=100;
    while(personaje1.distancia< meta && personaje2.distancia<meta){
        personaje1.avanzar();
        personaje2.avanzar();
        console.log("---------------------------------")
    }
    //determinar quien ha ganado
    if(personaje1.distancia>=meta && personaje2.distancia >=meta){
        console.log(`Ha habido un empate, llegaron al mismo tiempo a la meta`)
    }else if(personaje1.distancia>=meta){
        console.log(`HA GANADO ${personaje1.nombre}`)
    }else{
        console.log(`HA GANADO ${personaje2.nombre}`)
    }
}

const gato = new Animales("Miau","Gato");
const perro = new Animales("Guau","Perro")

carrera(gato,perro)