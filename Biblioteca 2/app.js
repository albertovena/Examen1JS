class Biblioteca{
    constructor(nombre,direccion,codPostal){
        this.nombre = nombre
        this.direccion = direccion
        this.codPostal = codPostal
        this.estanterias = []
    }

    agregarEstanteriasYSecciones(numEstanterias,numSecciones){
    
        for (let i = 0; i < numEstanterias; i++) {
            const seccion = new Array(numSecciones).fill(null);
            this.estanterias.push(seccion)
        }
        
    }

    modificaNombre(nuevoNombre){
        this.nombre = nuevoNombre;
    }

    modificaDireccion(nuevoDireccion){
        this.direccion = nuevoDireccion
    }

    modificaCodPostal(nuevoCodPostal){
        this.codPostal = nuevoCodPostal
    }

    imprimeNombre(){
        console.log(`Nombre - ${this.nombre}`)
    }

    imprimeDireccion(){
        console.log(`Direccion - ${this.direccion}`)
    }

    imprimeCodPostal(){
        console.log(`Codigo postal - ${this.codPostal}`)
    }

    agregarLibro(titulo,numEstanterias,seccion){
        if(this.estanterias[numEstanterias-1][seccion-1] == null){
            this.estanterias[numEstanterias-1][seccion-1] = titulo
        }else{
            console.log('Error al agregar libro, no existe estanteria o esta completo')
        }
    }

    imprimirEstanterias(){
        console.log("ESTANTERIAS")
        for (let i = 0; i < this.estanterias.length; i++) {
            console.log(`Estanteria ${(i+1)}`)
            for (let j = 0; j < this.estanterias[i].length; j++) {
                const libro = this.estanterias[i][j]
                if(libro){
                    console.log(`Seccion ${(j+1)}: ${libro}`)
                }
                else{
                    console.log(`Seccion ${(j+1)}: Vacio`)
                }
                
            }
            
        }
    }

}

const b1 = new Biblioteca("Biblioteca Central", "Avenida Principal, 123", "10001")
const b2 = new Biblioteca("Biblioteca Sur", "Calle de los Libros, 456", "10002")
const b3 = new Biblioteca("Biblioteca Norte", "Plaza de la Cultura, s/n", "10003")

b1.imprimeCodPostal()

b1.agregarEstanteriasYSecciones(3,4)

b1.agregarLibro("Cien Años de Soledad", 1, 1)
b1.agregarLibro("Don Quijote de la Mancha", 1, 2)
b1.agregarLibro("El Principito", 2, 1)
b1.agregarLibro("1984", 3, 3)

b1.imprimirEstanterias()

b1.agregarEstanteriasYSecciones(1,2)

b1.agregarLibro("Farenheit 451",4,1)

b1.imprimirEstanterias()
