const botaoIniciar = document.getElementById("botaoIniciar");
const botaoPausar = document.getElementById("botaoPausar");
const botaoReiniciar = document.getElementById("botaoReiniciar");
const spanMilissegundos = document.getElementById("milissegundos");
const spanSegundos = document.getElementById("segundos");
const spanMinutos = document.getElementById("minutos");

let milissegundos, minutos, segundos;

milissegundos = 0;
minutos = 0;
segundos = 0;

botaoIniciar.addEventListener("click", iniciarCronometro);

botaoPausar.classList.add("botaoTransparente");
botaoReiniciar.classList.add("botaoTransparente");

botaoPausar.classList.remove("botaoPausarHover");
botaoReiniciar.classList.remove("botaoReiniciarHover");

function iniciarCronometro() {
    botaoIniciar.removeEventListener("click", iniciarCronometro);
    const intervaloIncremento = setInterval(incrementar, 10);

    botaoIniciar.innerText = "Continuar";
    botaoIniciar.classList.add("botaoTransparente");
    botaoIniciar.classList.remove("botaoIniciarHover");
    
    botaoPausar.classList.add("botaoPausarHover");
    botaoPausar.classList.remove("botaoTransparente");
    
    
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
        botaoPausar.removeEventListener("click", pausar);
        clearInterval(intervaloIncremento);
        
    botaoIniciar.innerText = "Continuar"
    botaoIniciar.classList.add("botaoIniciarHover");
    botaoIniciar.classList.remove("botaoTransparente");

    botaoPausar.classList.remove("botaoPausarHover");
    botaoPausar.classList.add("botaoTransparente");
    
    botaoReiniciar.classList.add("botaoReiniciarHover");
    botaoReiniciar.classList.remove("botaoTransparente");

    botaoIniciar.addEventListener("click", iniciarCronometro);
    botaoReiniciar.addEventListener("click", reiniciarCronometro);
}

function reiniciarCronometro() {
    botaoReiniciar.removeEventListener("click", reiniciarCronometro);

    
    botaoReiniciar.classList.add("botaoTransparente");
    botaoReiniciar.classList.remove("botaoReiniciarHover");
    
    milissegundos = 0;
    minutos = 0;
    segundos = 0;
    
    botaoIniciar.innerText = "Iniciar";
    spanMilissegundos.innerText = "00";
    spanSegundos.innerText = "00";
    spanMinutos.innerText = "00";
}
