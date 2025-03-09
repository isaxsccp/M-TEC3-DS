//aqui fica o js que serve o frontend
// aqui tem as funcoes dos botoes (ex: DEL, +, CE)

//aqui tem a funcao assincrona que faz o calculo, 
// e usando o fetch faz a requisicao na url com o post

// printa no display da calculadora o resultado
// testa se a expressao é valida/caso nao seja, printa erro no display

let currentInput = '';
let tela = document.getElementById("tela");

function addNumber(value) {
    currentInput += value;
    tela.textContent = currentInput;
}

function addOperator(operator) {
    if (currentInput === "" && operator !== "-") return; 

    let srepeticao = currentInput.slice(-1);

    if (["+", "x", "/", "."].includes(srepeticao) && ["+", "x", "/", "."].includes(operator)) {
        alert("Não é permitido inserir dois operadores iguais consecutivamente");
        return;
    }

    // oermitir negativo após um operador (exemplo: 5 + -3)
    if (srepeticao === "-" && ["+", "x", "/"].includes(operator)) return;

    currentInput += operator;
    tela.textContent = currentInput;
}

function clean() {
    currentInput = '';
    tela.textContent = '';
}

function del() {
    currentInput = currentInput.slice(0, -1);
    tela.textContent = currentInput;
}


async function calculate() {
    if (!currentInput) return;

    try {
        // faz requisição POST para o backend com a expressão
        const response = await fetch('http://localhost:3000/calcular', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                expressao: currentInput.replace('x', '*') // troca 'x' por '*'
            })
        });

        const result = await response.json(); //aqui a constante result recebe so dps da resposta .json

        if (response.ok) {
            tela.textContent = result.resultado;
            currentInput = result.resultado.toString(); // atualiza a entrada com o resultado
        } else {
            tela.textContent = result.erro;
        }
    } catch (error) {
        tela.textContent = "Erro mano";
    }
}
