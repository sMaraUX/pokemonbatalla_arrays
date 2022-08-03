
// CLASE PADRE

class Pokemon {
 constructor(nombre, vida, elemento, ataques){
    this.nombre = nombre
    this.vida = vida
    this.elemento = elemento
    this.ataques = ataques
    }
}

//HIJOS

class Pikachu extends Pokemon {
  constructor(nombre, vida, elemento, ataques){
  super(nombre, vida, elemento, ataques) 
  }
}
class Charmander extends Pokemon {
  constructor(nombre, vida, elemento, ataques){
  super(nombre, vida, elemento, ataques) 
  }
}
class Squirtle extends Pokemon {
  constructor(nombre, vida, elemento, ataques){
  super(nombre, vida, elemento, ataques)      
  }
}
class Bulbasaur extends Pokemon {
  constructor(nombre, vida, elemento, ataques){
  super(nombre, vida, elemento, ataques)      
  }
}

//Listado de pokemons disponibles

const pikachu = new Pikachu("Pikachu", 1300, "Electrico", [(ImpactTrueno = 220), (Rayo = 300), (Coletazo = 60)])
const charmander = new Charmander("Charmander", 1250, "Fuego", [(Lanzallamas = 200), (Ascuas = 120), (Tackle = 50)])
const squirtle = new Squirtle("Squirtle", 1200, "Agua", [(pistoladeAgua = 210), (Burbujas = 150), (Tackle = 50)])
const bulbasaur = new Bulbasaur("Bulbasaur", 1200, "Planta", [(Latigazo = 200), (BombaLodo = 140), (LatigoCepa = 80)])

const pikachu1 = new Pikachu("Pikachu", 1300, "Electrico", [{ImpactTrueno: 230}, (Rayo = 250), (Coletazo = 70)])
const charmander1 = new Charmander("Charmander", 1250, "Fuego", [(Lanzallamas = 220), (Ascuas = 130), (Tackle = 40)])
const squirtle1 = new Squirtle("Squirtle", 1200, "Agua", [(pistoladeAgua = 200), (Burbujas = 180), (Tackle = 80)])
const bulbasaur1 = new Bulbasaur("Bulbasaur", 1200, "Planta", [(Latigazo = 210), (BombaLodo = 135), (LatigoCepa = 60)])

// POKEBOLAS PREDEFINIDAS

const pokebola1 = [pikachu, charmander, squirtle]
const pokebola2 = [bulbasaur, charmander, squirtle]
const pokebola3 = [bulbasaur, charmander, pikachu]
const pokebola4 = [bulbasaur, squirtle, pikachu]

const pokebola5 = [pikachu1, charmander1, squirtle1]
const pokebola6 = [bulbasaur1, charmander1, squirtle1]
const pokebola7 = [bulbasaur1, charmander1, pikachu1]
const pokebola8 = [bulbasaur1, squirtle1, pikachu1]



// ASIGNAR POKEBOLAS

function pokebolas1() {
  if (entrenador1.pokebolaAsignada1 == 1) {
    entrenador1.pokebolaAsignada1 = pokebola1
  } else if(entrenador1.pokebolaAsignada1 == 2) {
    entrenador1.pokebolaAsignada1 = pokebola2
  } else if(entrenador1.pokebolaAsignada1 == 3) {
    entrenador1.pokebolaAsignada1 = pokebola3
  } else if(entrenador1.pokebolaAsignada1 == 4) {
    entrenador1.pokebolaAsignada1 = pokebola4
  }   else { alert("Esta pokebola no existe!")
  pokebolas1()
  }
}

function pokebolas2() {
  if (entrenador2.pokebolaAsignada2 == 5) {
    entrenador2.pokebolaAsignada2 = pokebola5
  } else if(entrenador2.pokebolaAsignada2 == 6) {
    entrenador2.pokebolaAsignada2 = pokebola6
  } else if(entrenador2.pokebolaAsignada2 == 7) {
    entrenador2.pokebolaAsignada2 = pokebola7
  } else if(entrenador2.pokebolaAsignada2 == 8) {
    entrenador2.pokebolaAsignada2 = pokebola8
  } else { alert("Esta pokebola no existe!")
  pokebolas2()
  }
}

//comienza el juego

alert("Bienvenidos a su primer batalla Pokemon");

//DEFINIR SETTINGS DE ENTRENADORES

const entrenador1 = {nombre: "", pokebolaAsignada1: ""}
const entrenador2 = {nombre: "", pokebolaAsignada2: ""}

entrenador1.nombre = prompt("Ingrese el nombre del primer entrenador")
entrenador1.pokebolaAsignada1 = prompt("Elija sus Pokebolas: 1 | 2 | 3 | 4")
entrenador2.nombre = prompt("Ingrese el nombre del segundo entrenador")
entrenador2.pokebolaAsignada2 = prompt("Elija sus Pokebolas: 5 | 6 | 7 | 8")

// ejecutar asignacion de pokebola
  pokebolas1(),pokebolas2()

  console.log(entrenador2.pokebolaAsignada2)
  console.log(entrenador1.pokebolaAsignada1)


/*

    // Eligiendo la pokebola
function elegirTeam1() {
    switch(pokebolaEntrenador1) {
      case "1":
        if (IsNan == true) {
        alert(`${this.name} obtenido!` )} else { alert("Invalido")}
        break

        case "2": 
        pokebolaEntrenador1 = charmander
        alert(`${this.name} obtenido!` )
        break

        case "3":
          pokebolaEntrenador1 = bulbasaur
        alert(`${this.name} obtenido!` )

        case "4":  
        pokebolaEntrenador1 = squirtle
        alert(`${this.name} obtenido!` )
        break

        default:
          alert("Pokebola no válida")
          elegirTeam1()
    }
  }

  

  function elegirTeam2() {
    switch(pokebolaEntrenador2) {
      case "1":
        pokebolaEntrenador2 = pikachu1
        alert(`${this.name} obtenido!` )
        break

        case "2": 
        pokebolaEntrenador2 = charmander1
        alert(`${this.name} obtenido!` )
        break

        case "3":
          pokebolaEntrenador2 = bulbasaur1
        alert(`${this.name} obtenido!` )

        case "4":  
        pokebolaEntrenador2 = squirtle1
        alert(`${this.name} obtenido!` )
        break

        default:
          alert("Pokebola no válida")
          elegirTeam2()
    }
  }

  console.log(pokebolaEntrenador1)
  console.log(pokebolaEntrenador2)

    /*

//FUNCION DADAÑO POR ELEMENTO

function damageElement() {

      if(atacar = this.elemento = "Fuego")
        this.vida - (this.vida * 0.15)
      
      if (this.elemento == "Agua"){
        this.vida - (this.vida * 0.15)
      }

  }
}


console.log(squirtle.batalla(charmander.ataques[1]))
do {
  pikachu.batalla(charmander.Lanzallamas)
  if(charmander.vidas > 0) {
      break
  }
  squirtle.batalla(pikachu.PistoladeAgua)
} while(pikachu.vidas > 0)

/*

class Entrenador {
     this.nombre = nombre
     this.pokemons = pokemons
     }
    }
/* comienza el juego
    alert("Bienvenidos a su primer batalla Pokemon");

    const entrenador1 = new Entrenador(prompt("Ingrese el nombre del primer entrenador"), 
    prompt("Elija sus dos Pokemons: 1. Pikachu | 2. Charmander | 3. Squirtle | 4. Bulbasaur"))
    const entrenador2 = new Entrenador(prompt("Ingrese el nombre del segundo entrenador"),
    prompt("Elija sus dos Pokemons: 1. Pikachu | 2. Charmander | 3. Squirtle | 4. Bulbasaur"))

/*

let jugador1 = prompt("Ingresa el nombre del primer jugador");

let jugador2 = prompt("Ingresa el nombre del segundo jugador");

let pokemon1 = prompt(jugador1 +" Selecciona tu Pokemon inicial: Pikachu / Bulbasaur / Charmander / Squirtle").toLowerCase();
let pokemon2 = prompt(jugador2 +" Selecciona tu Pokemon inicial: Pikachu / Bulbasaur / Charmander / Squirtle").toLowerCase();

let puntosVidaply1 = 1000;
let puntosVidaply2 = 1000;

let pikachu = 500;
let bulbasaur = 350;
let charmander = 400;
let squirtle = 450;

function batalla1() {
  switch (pokemon1) {
    case "pikachu":
      atkPkm1 = puntosVidaply2 - pikachu;
      alert(
        "Jugador " + jugador1 + " Tus puntos de vida se redujeron a " + atkPkm1
      );
      break;

    case "bulbasaur":
      atkPkm1 = puntosVidaply2 - bulbasaur;
      alert(
        "Jugador " + jugador1 + " Tus puntos de vida se redujeron a " + atkPkm1
      );
      break;

    case "charmander":
      atkPkm1 = puntosVidaply2 - charmander;
      alert(
        "Jugador " + jugador1 + " Tus puntos de vida se redujeron a " + atkPkm1
      );
      break;

    case "squirtle":
      atkPkm1 = puntosVidaply2 - squirtle;
      alert(
        "Jugador " + jugador1 + " Tus puntos de vida se redujeron a " + atkPkm1
      );
      break;

    default:
      alert(
        "Jugador " + jugador1 + " Este no es tu Pokemón, inténtalo de nuevo"
      );
      batalla1();
  }
}

function batalla2() {
  switch (pokemon2) {
    case "pikachu":
      atkPkm2 = puntosVidaply1 - pikachu;
      alert(
        "Jugador " + jugador2 + " Tus puntos de vida se redujeron a " + atkPkm2
      );
      break;

    case "bulbasaur":
      atkPkm2 = puntosVidaply1 - bulbasaur;
      alert(
        "Jugador " + jugador2 + " Tus puntos de vida se redujeron a " + atkPkm2
      );
      break;

    case "charmander":
      atkPkm2 = puntosVidaply1 - charmander;
      alert(
        "Jugador " + jugador2 + " Tus puntos de vida se redujeron a " + atkPkm2
      );
      break;

    case "squirtle":
      atkPkm2 = puntosVidaply1 - squirtle;
      alert(
        "Jugador " + jugador2 + " Tus puntos de vida se redujeron a " + atkPkm2
      );
      break;

    default:
      alert(
        "Jugador " + jugador2 + " Este no es tu Pokemón, inténtalo de nuevo"
      );
      batalla2();
  }
}
alert(
  "Escogieron a sus compañeros! Tendrán su primera batalla a continuación!"
);

batalla1();
batalla2();

if (atkPkm1 < atkPkm2) {
  alert("El ganador de esta batalla es " + jugador2 + "!");
}
if (atkPkm1 > atkPkm2) {
  alert("El ganador de esta batalla es " + jugador1 + "!");
}

if (atkPkm2 == atkPkm1) {
  alert("Los pokemon pelearon duro pero están igualados!");
  alert("Es un empate!");
}


 function nuevoJuego() 
 {
     pokemon1 = prompt (jugador1 + " Selecciona tu Pokemon inicial: Pikachu / Bulbasaur / Charmander / Squirtle").toLowerCase()
     pokemon2 = prompt (jugador2 + " Selecciona tu Pokemon inicial: Pikachu / Bulbasaur / Charmander / Squirtle").toLowerCase()
    batalla1()
    batalla2()
        if(atkPkm1 < atkPkm2) {
        alert("El ganador de esta batalla es " + jugador2+ "!")
        }
        if(atkPkm1 > atkPkm2) {
        alert("El ganador de esta batalla es " + jugador1 + "!")
        }
        if(atkPkm2 == atkPkm1) {
        alert("Los pokemon pelearon duro pero están igualados!")
        alert("Es un empate!")
        }
    }

  let pregunta = prompt("Desean volver a jugar? SI - NO").toLowerCase()

  if(pregunta == "si") {
    nuevoJuego()
  }
  if(pregunta == "no") {
    alert("Adios entrenadores!")
  } else {
    alert("Nos vemos la próxima!")
  }
*/
    

 /*     damage(elemento) {
        if (this.elemento == "Electrico") {

          switch(this.elemento){
            case "Electrico":
            damage = (this.vida * 0.15)
            return (this.vida - damage)
            break

            case "Planta":
          }
        }
       } */
       