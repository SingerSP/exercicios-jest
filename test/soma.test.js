const {somaAdição, transferir, Deposito, Saque} = require('../soma.js')

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
test('Após adicionar 1000, ver se o valor é maior que 500', () =>
{
    expect()
})


