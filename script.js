const botaoIniciar = document.getElementById("botaoIniciar");
const botaoPausar = document.getElementById("botaoPausar");
const botaoMarcar = document.getElementById("botaoMarcar");
const spanMilissegundos = document.getElementById("milissegundos");
const spanSegundos = document.getElementById("minutos");
const spanMinutos = document.getElementById("segundos");

let milissegundos, minutos, segundos;

milissegundos = 0;
minutos = 0;
segundos = 0;

botaoIniciar.addEventListener("click", iniciarCronometro);

function iniciarCronometro() {
    botaoIniciar.removeEventListener("click", iniciarCronometro);
    incrementar();
}

function incrementar() {
    setInterval(() => {

        milissegundos++;

        if (milissegundos >= 10)spanMilissegundos.innerText = milissegundos;
        else spanMilissegundos.innerText = `0${milissegundos}`

    }, 100);
}
