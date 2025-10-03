const {somaAdição, transferir, Deposito, Saque, SaldoMaiorValor, Juros} = require('../soma.js')

// Exercicio 1
test('2 + 3 retorna 5', () =>{
    expect(somaAdição(2, 3)).toBe(5)
})

// Exercicio 2
test('100 + 0 retorna 100', () =>
{
    expect(Deposito(100, 0)).toBe(100)
})

// Exercicio 3
test('200 - 50 retorna 150', () =>
{
    expect(Saque(200, 50)).toBe150
})

// Exercicio 4
test('deve transferir 100 de uma conta com 500 para outra com 200', () =>
{
    const [c1, c2] = transferir(500, 200, 100)
    expect(c1).toBe(400)
    expect(c2).toBe(300)
})

// Exercicio 5 

test('Após adicionar 1000, ver se o valor é maior que 500', () => {
    const resultado = SaldoMaiorValor(1000);
    expect(resultado).toBeGreaterThan(500);
});


// Exercicio 6
test('Após adicionar 50, o saldo deve ser maior ou igual a 50 (saldo mínimo exigido)', () => {
    const resultado = SaldoMaiorValor(50);
    expect(resultado).toBeGreaterThanOrEqual(50);
});

// Exercicio 7
test('Após sacar quase todo o dinheiro, o saldo deve ser menor que 10', () =>{
    const saldoAtual = 1000
    const resultado = Saque(saldoAtual, 995)
    expect(resultado).toBeLessThan(10)
})

// Exercicio 8
test('Após sacar 300, vai tirar o valor que ele tinha 300', () =>{
    const saldoAtual = 350
    const resultado = Saque(saldoAtual, 400)
    expect(resultado).toBeLessThanOrEqual(0)
})

// Exercicio 9 
test('Correção de arredondamento em juros', () =>{
    const resultado = Juros()
    expect(resultado).toBeCloseTo(0.3)
})

// Exercicio 10
test("Saldo negativo proibido!", () =>{
    const saldoAtual = 100
    const resultado = Saque(saldoAtual, 150)
    expect(resultado).toBeLessThan(0)
})

