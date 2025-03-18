//destructur do console.log()
const {log} = console;

// declaração de array
let quantidadeDeNumerosSorteados = [];
// declaração do botão reiniciar
const btnReiniciar = document.querySelector("#btn-reiniciar");

// função que gera o número secreto
function gerarNumerosAleatorio(numeroFinal) {
    let numeroSorteado = Math.floor(Math.random() * numeroFinal + 1);
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
    btnReiniciar.classList.toggle('container__botao');
    btnReiniciar.classList.toggle('container__botao-desabilitado');

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
                numeroSecreto = gerarNumerosAleatorio(elementoNumeroFinal);
            } while (arrayNumerosSorteados.includes(numeroSecreto) || numeroSecreto < elementoNumeroInicial);

            arrayNumerosSorteados.push(numeroSecreto);
        }
        
        elementoResultado.innerText = '';
        elementoResultado.innerHTML = `<br>Números sorteados: ${arrayNumerosSorteados}<br>`;

        btnReiniciar.classList.toggle('container__botao');
        btnReiniciar.classList.toggle('container__botao-desabilitado');
    }
} 