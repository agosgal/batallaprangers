var jugadorUno = prompt("Sos el jugador 1. Por favor ingresá tu Power Ranger")
var jugadorDos = prompt("Sos el jugador 2. Por favor ingresá tu Power Ranger")

var rojo = {
    nombre: "Rojo",
    vida: 100,
    ataque: 50,
    atacar: function(jugadorAtacadoR) {
        jugadorAtacadoR.vida = jugadorAtacadoR.vida - rojo.ataque
    }
}

var amarillo = {
    nombre: "Amarillo",
    vida: 300,
    ataque: 10,
    atacar: function(jugadorAtacadoA) {
        jugadorAtacadoA.vida = jugadorAtacadoA.vida - amarillo.ataque
    }
}

var blanco = {
    nombre: "Blanco",
    vida: 500,
    ataque: 30,
    atacar: function(jugadorAtacadoB) {
        jugadorAtacadoB.vida = jugadorAtacadoB.vida - blanco.ataque
    }
}

if (jugadorUno == "Rojo") {
    (rojo.nombre = "Jugador 1") & (jugadorUno = rojo) 
} if (jugadorUno == "Amarillo") {
    (amarillo.nombre = "Jugador 1") & (jugadorUno = amarillo)
} if (jugadorUno == "Blanco") { 
    (blanco.nombre = "Jugador 1") & (jugadorUno = blanco)
}

if (jugadorDos == "Rojo") {
    (rojo.nombre = "Jugador 2") & (jugadorDos = rojo)
} if (jugadorDos == "Amarillo") {
    (amarillo.nombre = "Jugador 2") & (jugadorDos = amarillo)
} if (jugadorDos == "Blanco") {
    (blanco.nombre = "Jugador 2") & (jugadorDos = blanco)
}



while (jugadorUno.vida > 0 & jugadorDos.vida > 0) {
  jugadorUno.atacar(jugadorDos);
  jugadorDos.atacar(jugadorUno)
}

if (jugadorUno.vida <= 0) {
    console.log("El ganador es " + jugadorDos.nombre)
}

if (jugadorDos.vida <= 0) {
    console.log("El ganador es el " + jugadorUno.nombre)
}