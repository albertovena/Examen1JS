class Biblioteca{
    constructor(nombre,direccion){
        this.nombre = nombre;
        this.direccion = direccion;
        this.libros = []; //array bidimensional
    }

    //metodo para agregar seccions y estantes a los libros
    agregarSeccionesYEstantes(numSecciones,numEstantes){
        for (let i = 0; i < numSecciones; i++) {
            const seccion = new Array(numEstantes).fill(null); //esto lo que hace es crear un array para los estantes de cada seccion
            this.libros.push(seccion);      
        }
    }

    modificaNombre(nuevoNombre){
        this.nombre = nuevoNombre;
    }

    modificaDireccion(nuevaDireccion){
        this.direccion = nuevaDireccion;
    }

    imprimeNombre(){
        console.log(`Nombre de la biblioteca: ${this.nombre}`)
    }

    imprimeDireccion(){
        console.log(`Direccion de la biblioteca: ${this.direccion}`)
    }

    //agregar un libro a una seccion y un estante en especifico

    agregarLibro(titulo,seccion,estante){
        if(this.libros[seccion-1] && this.libros[seccion-1][estante-1] == null){
            this.libros[seccion-1][estante-1] = titulo;
        }else{
            console.log("No se puede agregar el libro")
        }
    }

    imprimirLibros(){
        console.log(`Libros de la biblioteca ${this.nombre}`)

        for (let seccion = 0; seccion < this.libros.length; seccion++) {
            console.log(`Seccion ${seccion +1}`)
            
            for (let estante = 0; estante < this.libros[seccion].length; estante++) {
                const libro = this.libros[seccion][estante];
                if(libro){
                    console.log(`   Estante ${seccion+1}: ${libro}`)
                }else{
                    console.log(`   Estante ${estante+1}: Vacio`)
                }
                
            }

        }
    }

}
//creacion de la biblioteca
const b1 = new Biblioteca("Municipal Montequinto","C/ Venecia")
b1.imprimeDireccion();

b1.agregarSeccionesYEstantes(3, 4);


b1.agregarLibro("El Quijote", 1, 1);
b1.agregarLibro("Cien Años de Soledad", 1, 2);
b1.agregarLibro("El Principito", 2, 3);
b1.agregarLibro("1984", 3, 2);

b1.imprimirLibros();