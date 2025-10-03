//Exercicio 1
function somaAdição(num1, num2)
{
    return num1 + num2
}

//Exercicio 2
function Deposito(entrada, saldoAtual)
{
    return entrada + saldoAtual
}

// Exercicio 3
function Saque(saldoAtual, sacar)
{
    return saldoAtual - sacar
}

// Exercicio 4
function transferir(conta1, conta2, valor)
{
    conta1 -= valor
    conta2 += valor
    return [conta1, conta2]
}

// Exercicio 5
function SaldoMaiorValor(Deposito) {
    let saldo = 0;
    saldo += Deposito;
    return saldo;
}


function Juros() {
    return 0.1 + 0.2
}

module.exports = 
{
    somaAdição,
    transferir,
    Deposito,
    Saque,
    SaldoMaiorValor,
    Juros
}