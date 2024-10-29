class Restaurante{
    constructor(nombre,direccion){
        this.nombre = nombre;
        this.direccion = direccion;
        this.mesas = [];
    }

    agregarZonasYMesas(zonas, mesa){
        for (let i = 0; i < zonas; i++) {
            const zona = new Array(mesa).fill(null);
            this.mesas.push(zona);
        }
    }

    modificaNombre(nuevoNombre){
        this.nombre = nuevoNombre;
    }

    modificaDireccion(nuevaDireccion){
        this.direccion = nuevaDireccion;
    }

    imprimeNombre(){
        console.log(`Nombre del restaurante: ${this.nombre}`)
    }

    imprimeDireccion(){
        console.log(`Direccion: ${this.direccion}`)
    }

    reservarMesa(nombre,numZona,numMesa){
        if(this.mesas[numZona -1] && this.mesas[numZona-1][numMesa-1] == null){
            this.mesas[numZona -1][numMesa-1] = nombre; 
        }else{
            console.log("No se puede reservar la mesa, no existe o ya está ocupada")
        }
    }

    //imprimir todas las mesas y sus reservas
    
    imprimirMesas(){
        console.log(`Reservas en el restaurante: ${this.nombre}`)

        for (let zona = 0; zona < this.mesas.length; zona++) {
            console.log(`Zona ${zona+1}: `)
            for (let mesa = 0; mesa < this.mesas[zona].length; mesa++) {
                const cliente = this.mesas[zona][mesa]
                if(cliente){
                    console.log(`   Mesa ${mesa+1}: Reservada por ${cliente}`)
                }else{
                    console.log(`   Mesa ${mesa+1}: Vacia`)
                }
                
            }
        }
    }
}

const res1 = new Restaurante("Telepizza","Calle Venecia")
res1.imprimeNombre()

res1.agregarZonasYMesas(3,3)

res1.reservarMesa("Alberto",2,3)

res1.imprimirMesas()
