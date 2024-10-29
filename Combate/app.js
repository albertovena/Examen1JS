// Clase base Personaje
class Personaje {
    constructor(nombre, tipo) {
      this.nombre = `${tipo}-${nombre}`;
      this.vida = Math.floor(Math.random() * (130 - 100 + 1)) + 100; // El math .floor redonde para onbteer un numero exacto.
      //multiplica el numero aleatorio por el tamaño del rango deseado (max-min+1). Esto amplia el rango de 0 a max - min +1 y permite cubrir todos los posibles valores enteros entre min y max
      //el +100 ultimo lo que hace es ajustar para que el valor minimo sea minimo. hace que el rango final sea de min a max ambos inclusive
      this.dano = Math.floor(Math.random() * (30 - 20 + 1)) + 20;    // Daño entre 20 y 30
    }
  
    // Método para atacar a otro personaje
    atacar(objetivo) {
      const danoInfligido = Math.floor(Math.random() * (this.dano + 1)); //pone un valor fijo para ese ataque de un numero aleatorio del rango de daño que puede hacer
      console.log(`${this.nombre} ataca a ${objetivo.nombre} causando ${danoInfligido} de daño.`);
      objetivo.vida -= danoInfligido;//le quita el daño que ha inflingido al personaje
      if (objetivo.vida < 0) {
        objetivo.vida = 0; // No permitimos que la vida baje de 0
      }
      console.log(`${objetivo.nombre} ahora tiene ${objetivo.vida} de vida.`);
    }
  }
  
  // Crear personajes
  const humano = new Personaje("Juan", "Humano");
  const orco = new Personaje("Gorak", "Orco");
  
  console.log(`${humano.nombre} tiene ${humano.vida} de vida y hace ${humano.dano} de daño.`);
  console.log(`${orco.nombre} tiene ${orco.vida} de vida y hace ${orco.dano} de daño.`);
  
  // Función para simular el combate
  function combate(personaje1, personaje2) {
    while (personaje1.vida > 0 && personaje2.vida > 0) {
      // El personaje 1 ataca al personaje 2
      personaje1.atacar(personaje2);
  
      // Si el personaje 2 todavía está vivo, contraataca
      if (personaje2.vida > 0) {
        personaje2.atacar(personaje1);
      }
  
      console.log("----------------------------------");
    }
  
    // Esto se ejecuta porque al ser el metodo anterior un while no se acaba hasta que alguno de los dos personajes no llegue a 0 su vida
    if (personaje1.vida > 0) {
      console.log(`${personaje1.nombre} ha ganado el combate.`);
    } else {
      console.log(`${personaje2.nombre} ha ganado el combate.`);
    }
  }
  
  // Iniciar el combate
  combate(humano, orco);
  