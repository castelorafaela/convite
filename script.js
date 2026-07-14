// Botão SIM
function aceitou() {

    let resultado = document.getElementById("resultado");

    resultado.innerHTML = "Preparando seu encontro com a Rafa... ❤️";

    let segundos = 5;

    let contador = setInterval(() => {

        resultado.innerHTML =
        `🎉 Encontro confirmado em ${segundos}...`;

        segundos--;

        if (segundos < 0) {

            clearInterval(contador);

            resultado.innerHTML = `
            ❤️ PARABÉNS, MATHEUS GOSTOSÃO! ❤️
            <br><br>
            Você acabou de garantir um encontro com a mulher mais gata,
            mais linda e mais incrível de todas: <b>Rafa Castelo</b>. 😌✨
            <br><br>
            Agora tire um print desta tela e envie imediatamente para ela! 📸💕
            `;

            // Confetes
            soltarConfetes();
        }

    }, 1000);
}


// Botão NÃO fugindo
const botaoNao = document.getElementById("nao");

botaoNao.addEventListener("mouseover", () => {

    const largura = window.innerWidth - 150;
    const altura = window.innerHeight - 80;

    const x = Math.random() * largura;
    const y = Math.random() * altura;

    botaoNao.style.position = "absolute";
    botaoNao.style.left = x + "px";
    botaoNao.style.top = y + "px";

});


// Criando corações caindo
function criarCoracoes() {

    setInterval(() => {

        const coracao = document.createElement("div");

        coracao.classList.add("coracao");
        coracao.innerHTML = "❤️";

        coracao.style.left =
            Math.random() * window.innerWidth + "px";

        coracao.style.fontSize =
            (Math.random() * 20 + 20) + "px";

        coracao.style.animationDuration =
            (Math.random() * 3 + 4) + "s";

        document.body.appendChild(coracao);

        setTimeout(() => {
            coracao.remove();
        }, 7000);

    }, 300);

}

criarCoracoes();


// Confetes quando clicar em SIM
function soltarConfetes() {

    for (let i = 0; i < 80; i++) {

        const confete = document.createElement("div");

        confete.innerHTML = "🎉";
        confete.style.position = "absolute";
        confete.style.left =
            Math.random() * window.innerWidth + "px";

        confete.style.top = "-50px";

        confete.style.fontSize =
            (Math.random() * 20 + 15) + "px";

        confete.style.animation =
            `cair ${Math.random() * 3 + 2}s linear`;

        document.body.appendChild(confete);

        setTimeout(() => {
            confete.remove();
        }, 5000);
    }

}


// Mensagem romântica mudando automaticamente
const frases = [
    "💖 A chance de sair com a mais linda apareceu!",
    "🥰 Dizem que oportunidades assim aparecem uma vez na vida.",
    "🍻 Boteco + Rafa = combinação perfeita.",
    "❤️ Não deixe a mulher mais gata esperando!"
];

let indice = 0;

setInterval(() => {

    const titulo = document.querySelector("h1");

    if (titulo) {
        titulo.innerHTML = frases[indice];
        indice++;

        if (indice >= frases.length) {
            indice = 0;
        }
    }

}, 4000);