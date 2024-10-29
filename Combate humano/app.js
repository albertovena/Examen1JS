class Combate{
    constructor(nombre,tipo){
        this.nombre = `${nombre} - ${tipo}`
        this.vida = Math.floor(Math.random()*(100-30+1)+30)
        this.danio = Math.floor(Math.random()*(30-20+1)+20)
    }

    
    atacar(objetivo){
        const danioInflingido = Math.floor(Math.random()*(30-20+1)+1)//se hace otra vez para que vaya haciendo diferente daño, sino siempre hace el aleatorio de antes  
            objetivo.vida -= danioInflingido;
            console.log(`El personaje ${this.nombre} ataca a ${objetivo.nombre} con un daño de ${danioInflingido}`)
            if(objetivo.vida<0){
                objetivo.vida =0;
            }
            console.log(`La vida de ${objetivo.nombre} es de ${objetivo.vida}`)
            
      
    }




    


}

const h1 = new Combate("Alberto","Orco")
const h2 = new Combate("Luis","Humano")

function combate(h1,h2){
    do{
        var numero = Math.floor(Math.random()*(1+1))
        if(numero == 0){
            h1.atacar(h2)
            console.log(`Ataca ${h1.nombre}`)
            console.log(`La vida de ${h2.nombre} - ${h2.vida}`)
        }else{
            h2.atacar(h1)
            console.log(`Ataca ${h2.nombre}`)
            console.log(`La vida de ${h1.nombre} - ${h1.vida}`)
        }
    }while(h1.vida >= 1 && h2.vida >= 1)
    
    if(h1.vida<=0){
        console.log(`Ha perdio ${h1.nombre}`)
    }else{
        console.log(`Ha perdido ${h2.nombre}`)
    }
    
}
combate(h1,h2)