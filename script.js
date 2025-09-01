let despesas = [];


function cadastroDespesa() {
    let categoria = prompt("Digite a categoria (Alimentação, Transporte...):");
    let valor = parseFloat(prompt("Digite o valor:"));

    if (valor < 0) {
        alert("Valor é negativo!");
        return;
    }

    despesas.push([categoria, valor]);
    alert("Nova despesa salva com sucesso!");
};


function resumo() {
    if (despesas.length === 0) {
        alert("Nenhuma despesa cadastrada!");
        return;
    };

    let soma = 0;

    console.log("Resumo das despesas:\n")
    for(let i = 0; i < despesas.length; i++) {
        let categoria = despesas[i][0];
        let valor = despesas[i][1];

        console.log(`${categoria} = R$ ${valor.toFixed(2)}`);
        soma += valor;
    };

    let media = soma / despesas.length;
    console.log(`A soma das despesas é: ${soma.toFixed(2)}`);
    console.log(`A média das despesas é: ${media.toFixed(2)}`);

};

function limparDespesas() {
    despesas = [];
    console.clear();
    alert("Despesas apagadas!!");

};

let opcao = "";

function menu() {
    while (opcao !== 4) {
        opcao = Number(prompt("Calculadora de Despesas Pessoais! \n" +
            "Escolha a sua opção: \n" +
            "1. Cadastro de despesas. \n" +
            "2. Resumo de despesas. \n" +
            "3. Limpar despesas. \n" +
            "4. Sair."
        ));

        switch (opcao) {
            case 1:
                cadastroDespesa();
                break;
            case 2:
                resumo();
                break;
            case 3:
                limparDespesas();
                break;
            case 4:
                alert("Fechando a calculadora!");
                break;
            default:
                alert("Opção inválida, tente novamente.")
                break;
        };
    };
};

menu()