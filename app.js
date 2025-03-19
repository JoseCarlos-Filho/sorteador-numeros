//destructur do console.log()
const {log} = console;

// declaração de array
let quantidadeDeNumerosSorteados = [];

// função que gera o número secreto
function gerarNumerosAleatorio(numeroInicial, numeroFinal) {
    let numeroSorteado = Math.floor(Math.random() * (numeroFinal - numeroInicial + 1)) + numeroInicial;
    return numeroSorteado;
}

// função que limpa os inputs de entrada.
function limpaCampos() {
    let quantidade = document.querySelector("#quantidade").value = '';
    let inicial = document.querySelector("#de").value = '';
    let final = document.querySelector("#ate").value = '';
}

// Lógica do botão reiniciar com chamada através do evento onclick
function reiniciar() {
    limpaCampos();
    quantidadeDeNumerosSorteados = [];
    document.querySelector('#resultado .texto__paragrafo').innerText = '';
    mudarEstadoDoBotaoReiniciar();
}


// lógico do botão sortear com chamada de função onclick
function sortear() {
    
    const elementoQuantidadeDeNumeros = parseInt(document.getElementById("quantidade").value);
    const elementoNumeroInicial = parseInt(document.getElementById("de").value);
    const elementoNumeroFinal = parseInt(document.getElementById("ate").value);
    const elementoResultado = document.querySelector('#resultado .texto__paragrafo');
    
    let arrayNumerosSorteados = [];
    
    // log(elementoNumeroFinal, elementoNumeroInicial, elementoQuantidadeDeNumeros);
    if (elementoQuantidadeDeNumeros <= 0 || elementoNumeroInicial <= 0 || elementoNumeroFinal <= 0) {
        
        alert("Preencha os campos com valores maiores que 0!");
        elementoResultado.innerHTML = "Valores de entrada inconsistente...";
        limpaCampos();
        return;
    } else if (elementoNumeroFinal <= elementoNumeroInicial || elementoQuantidadeDeNumeros <= 0 || elementoQuantidadeDeNumeros > (elementoNumeroFinal - elementoNumeroInicial + 1)) {
        
        alert("Intervalo inválido!, campo 'até o número' não pode ser igual ou menor que o campo 'Do número', ou quantidade de números sorteados não pode ser menor ou igual a zero!, ou quantidade de número não pode ser maior que o número do campo 'até o número'!");
        elementoResultado.innerHTML = "Intervalo inválido...";
        limpaCampos();
        return;
    
    } else {

        for(let quantidade = 0; quantidade < elementoQuantidadeDeNumeros; quantidade++) {
            let numeroSecreto;

            do {
                numeroSecreto = gerarNumerosAleatorio(elementoNumeroInicial ,elementoNumeroFinal);
            } while (arrayNumerosSorteados.includes(numeroSecreto) || numeroSecreto < elementoNumeroInicial);

            arrayNumerosSorteados.push(numeroSecreto);
        }
        
        elementoResultado.innerText = '';
        elementoResultado.innerHTML = `<br>Números sorteados: ${arrayNumerosSorteados}<br>`;

        mudarEstadoDoBotaoReiniciar();
    }
} 

function mudarEstadoDoBotaoReiniciar() {
    // declaração do botão reiniciar
    const btnReiniciar = document.querySelector("#btn-reiniciar");
    if (btnReiniciar.classList.contains('container__botao-desabilitado')) {
        btnReiniciar.classList.remove('container__botao-desabilitado');
        btnReiniciar.classList.add('container__botao');
    } else {
        btnReiniciar.classList.remove('container__botao');
        btnReiniciar.classList.add('container__botao-desabilitado');
    }
}