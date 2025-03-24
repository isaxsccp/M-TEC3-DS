//aqui fica o js que serve o frontend
// aqui tem as funcoes dos botoes (ex: DEL, +, CE)

//aqui tem a funcao assincrona que faz o calculo, 
// e usando o fetch faz a requisicao na url com o post

// printa no display da calculadora o resultado
// testa se a expressao é valida/caso nao seja, printa erro no display

let display = document.getElementById("display");
let currentInput = ""
let currentOperator = ""

function addNumber(value){
    currentInput += value
    tela.textContent = currentInput
}

function addOperator(operator) {
    if (currentInput === "" && operator !== "-") return; 

    let srepeticao = currentInput.slice(-1);

   
    if (["+", "x", "/", "."].includes(srepeticao) && ["+", "x", "/", "."].includes(operator)) {
        alert("Não é permitido inserir dois operadores iguais consecutivamente");
        return;
    }

    // Permitir negativo após um operador (exemplo: 5 + -3)
    if (srepeticao === "-" && ["+", "x", "/"].includes(operator)) return;

    currentInput += operator;
    tela.textContent = currentInput;
}
function clean(){
    currentInput= " ";
    tela.textContent = " ";
}

function del(){
    currentInput = currentInput.slice(0, -1)
    tela.textContent = currentInput
}

function calculate(){
    if (!currentInput) return;

    currentInput = currentInput.replace(/x/g, '*');

    try {
        let result = new Function('return '+ currentInput) ()
        tela.textContent = result;
        currentInput = result.toString();

    } catch (error) {
        tela.textContent = "Erro";
        currentInput = "";
    }
}
