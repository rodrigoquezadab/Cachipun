/* Evento click de inicio de juego */

document.getElementById("myBtnJugar").addEventListener("click", function () {
  let puntajeMaquina = 0;
  let puntajeJugador = 0;
  let cantJuegos = +prompt("cuántos juegos quieres jugar?");

  for (let i = 1; i <= cantJuegos; i++) {
    let jugadaMaquina = 1 + Math.floor(Math.random() * 3);
    let jugadaJugador = +prompt("Ingresa el numero de tu juego 1-✊ 2-📜 3-✂");
    let jugadaGanador = "";
    //Evaluacion de jugasas y resultados
    if (jugadaMaquina == jugadaJugador) {
      //empate
      jugadaGanador = "Empate";
    } else if (
      (jugadaMaquina == 1 && jugadaJugador == 3) ||
      (jugadaMaquina == 2 && jugadaJugador == 1) ||
      (jugadaMaquina == 3 && jugadaJugador == 2)
    ) {
      jugadaGanador = "La Máquina Gana";
      puntajeMaquina += 1;
    } else {
      jugadaGanador = "El Humano Gana";
      puntajeJugador += 1;
    }
  }

  //Mensaje final con Resultados de todos los juegos.
  if (puntajeMaquina == puntajeJugador) {
    document.querySelector(
      ".juego"
    ).innerHTML = `El juego ha terminado en empate, la máquina obtuvo ${puntajeMaquina} puntos y tu ${puntajeJugador} puntos.`;
  } else if (puntajeJugador > puntajeMaquina) {
    document.querySelector(
      ".juego"
    ).innerHTML = `Felicidades 🎉 ganaste el juego! La máquina obtuvo ${puntajeMaquina} puntos y tu ${puntajeJugador} puntos.`;
  } else {
    document.querySelector(
      ".juego"
    ).innerHTML = `Perdiste! La máquina obtuvo ${puntajeMaquina} puntos y tu ${puntajeJugador} puntos.`;
  }
});
