class Personaje{
    constructor(nombre,tipo){
        this.nombre = nombre
        this.tipo = tipo
        this.vida = Math.floor(Math.random()*(150-120+1)+120)
        this.danio = Math.floor(Math.random()*(35-25+1)+25)
        this.turnos = 0; 
    }

    atacar(objetivo){
        const danioInflingido = Math.floor(Math.random()*(35-25+1)+1)
        objetivo.vida -= danioInflingido
        console.log(`El luchador ${this.nombre} - ${this.tipo} ha inflingido un total de daño a ${objetivo.nombre} de ${danioInflingido}`)
        console.log(`Vida actual de ${objetivo.vida}`)
    }


}

class Mago extends Personaje{
    constructor(nombre,vida, danio){
        super(nombre,vida,danio)
    }
}

class Guerrero extends Personaje{
    constructor(nombre,vida, danio){
        super(nombre,vida,danio)
    }
}

const mago = new Mago("Alberto","Mago")
const guerrero = new Guerrero("Luis","Guerrero")

function pelea(mago,guerrero){
    while(mago.vida>0 && guerrero.vida>0){
        const elige = Math.floor(Math.random()*(1+1));
        if(elige == 0){
            if(mago.turnos==3){
                mago.vida+=10 //como tiene un escudo de 10, le sumo en 10 la vida
                console.log("SE HA ACTIVADO UN ESCUDO DURANTE ESTA RONDA PARA EL MAGO DE 10 DE VIDA")
            }
            mago.atacar(guerrero)
            console.log(`Ataca ${mago.nombre}`)
            mago.turnos++;
        }else{
            if(guerrero.turnos==5){
                console.log(`AHORA HACE EL GUERRERO DAÑO POR 2 `)
                guerrero.danio *=2;
            }
            guerrero.atacar(mago)
            console.log(`Ataca ${guerrero.nombre}`)
            guerrero.turnos++;
        }
        
    }
    if(mago.vida<=0){
        console.log(`Ha perdido ${mago.nombre}`)
    }else{
        console.log(`Ha perdido ${guerrero.nombre}`)
    }
}

pelea(mago,guerrero)