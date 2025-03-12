const {log} = console;
let quantidadeDeNumerosSorteados = [];
const btnReiniciar = document.querySelector("#btn-reiniciar");

function faixaDeNumero(numeroSecreto, numeroInicial, numeroFinal) {
    for(numeroInicial; numeroInicial <= numeroFinal; numeroInicial++) {
        if (numeroInicial === numeroSecreto) {
            log(numeroInicial);
            quantidadeDeNumerosSorteados.push(numeroInicial);
        }
    }
    return quantidadeDeNumerosSorteados;
}

function gerarNumerosAleatorio(numeroFinal) {
    let numeroSorteado = Math.floor(Math.random() * numeroFinal + 1);
    return numeroSorteado;
}

function limpaCampos() {
    let quantidade = document.querySelector("#quantidade");
    let inicial = document.querySelector("#de");
    let final = document.querySelector("#ate");

    if (quantidade) {
        quantidade.value = "";
    }
    if (inicial) {
        inicial.value = "";
    }
    if (final) {
        final.value = "";
    }
}

function reiniciar() {
    limpaCampos();
    quantidadeDeNumerosSorteados = [];
    document.querySelector('#resultado .texto__paragrafo').innerText = '';
    btnReiniciar.classList.remove('container__botao');
    btnReiniciar.classList.add('container__botao-desabilitado');

}

function sortear() {
    
    const elementoQuantidadeDeNumeros = parseInt(document.getElementById("quantidade").value);
    const elementoNumeroInicial = parseInt(document.getElementById("de").value);
    const elementoNumeroFinal = parseInt(document.getElementById("ate").value);
    const elementoResultado = document.querySelector('#resultado .texto__paragrafo');
    
    let arrayNumerosSorteados = [];
    
    log(elementoNumeroFinal, elementoNumeroInicial, elementoQuantidadeDeNumeros);
    if (elementoQuantidadeDeNumeros <= 0 || elementoNumeroInicial <= 0 || elementoNumeroFinal <= 0) {
        alert("Preencha os campos com valores maiores que 0!");
        elementoResultado.innerHTML = "Valores de entrada inconsistente...";
        limpaCampos();
        return;
    } else if (elementoNumeroFinal <= elementoNumeroInicial && elementoQuantidadeDeNumeros <= 0 || elementoQuantidadeDeNumeros >= elementoNumeroFinal) {
        alert("Intervalo inválido!, campo 'até o número' não pode ser igual ou menor que o campo 'Do número', ou quantidade de números sorteados não pode ser menor ou igual a zero!, ou quantidade de número não pode ser maior que o número do campo 'até o número'!");
        elementoResultado.innerHTML = "Intervalo inválido...";
        limpaCampos();
        return;
    
    } else {

        for(let quantidade = 0; quantidade < elementoQuantidadeDeNumeros; quantidade++) {
            let numeroSecreto = gerarNumerosAleatorio(elementoNumeroFinal);
            log(numeroSecreto);
            arrayNumerosSorteados = faixaDeNumero(numeroSecreto, elementoNumeroInicial, elementoNumeroFinal);
        }
        elementoResultado.innerText = '';
        arrayNumerosSorteados.forEach(numero => {
            elementoResultado.innerHTML += `<br>Números sorteados: ${numero}`;
        });

        btnReiniciar.classList.remove('container__botao-desabilitado');
        btnReiniciar.classList.add('container__botao');
    }
} 