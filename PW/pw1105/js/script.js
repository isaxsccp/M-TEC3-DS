import { times } from "./bd.js";
//foreach é uma forma de percorrer todos os itens de um array, como se fosse um for
//slice meio que copia uma parte do array sem modificar a original



const tabelas = [
    document.querySelector("#grupo-a tbody"),
    document.querySelector("#grupo-b tbody"),
    document.querySelector("#grupo-c tbody"),
    document.querySelector("#grupo-d tbody")
];

// Percorre cada grupo e preenche a tabela do seu devido time usando um laço de repetição
for (let i = 0; i < 4; i++) {
    const grupoTimes = times.slice(i * 4, i * 4 + 4);
    const tabela = tabelas[i];
    const linhas = tabela.querySelectorAll("tr");

    grupoTimes.forEach((time, index) => {
        const dados = [
            time["classificação"],
            time.pontos,
            time.Jogos,
            time.vitorias,
            time.empates,
            time.derrotas,
            time.gols_pro,
            time.gols_contra,
            time.saldo_gols,
            time.porcent
        ];

        const celulas = linhas[index].querySelectorAll("td"); //pega todos os td do time correspondente
        //foreach para prencher cada td da linha com o dado
        dados.forEach((dado, j) => {
            celulas[j].textContent = dado;
        });
    });
}
