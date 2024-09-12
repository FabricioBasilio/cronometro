const botaoIniciar = document.getElementById("botaoIniciar");
const botaoPausar = document.getElementById("botaoPausar");
const botaoMarcar = document.getElementById("botaoMarcar");
const spanMilissegundos = document.getElementById("milissegundos");
const spanSegundos = document.getElementById("segundos");
const spanMinutos = document.getElementById("minutos");

let milissegundos, minutos, segundos;

milissegundos = 0;
minutos = 0;
segundos = 0;

botaoIniciar.addEventListener("click", iniciarCronometro);

function iniciarCronometro() {
    botaoIniciar.removeEventListener("click", iniciarCronometro);
    const intervaloIncremento = setInterval(incrementar, 10);

    botaoPausar.addEventListener("click", () => pausar(intervaloIncremento));
}

function incrementar() {

        milissegundos++;

        if (milissegundos === 100) {
            milissegundos = 0;
            segundos++;

            spanSegundos.innerText = `0${segundos}`
        }

        if (milissegundos >= 10) spanMilissegundos.innerText = milissegundos;
        else spanMilissegundos.innerText = `0${milissegundos}`

        if (segundos === 60) {
            segundos = 0;
            minutos++;

            spanMinutos.innerText = `0${minutos}`;
        }

        if (minutos >= 10)
            spanMinutos.innerText = minutos;
        else spanMinutos.innerText = `0${minutos}`



        if (segundos >= 10) spanSegundos.innerText = segundos;
        else spanSegundos.innerText = `0${segundos}`

}

function pausar(intervaloIncremento) {
    clearInterval(intervaloIncremento);
    botaoIniciar.innerText = "Continuar"
    botaoIniciar.addEventListener("click", iniciarCronometro);
}
