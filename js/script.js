const startingMinutes = 10;
// el reloj esta por defecto en una cuneta regresiva de 10 minutos
// cambialo al tiempo que desees
let time = startingMinutes * 60;

const countdownEl = document.getElementById('countdown');

setInterval (updateCountdown, 1000);

function updateCountdown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  seconds = seconds < 10 ? '0' + seconds : seconds;

  countdownEl.innerHTML = `${minutes}:${seconds}`;
  time--;
  time = time < 0 ? 0:time;
}