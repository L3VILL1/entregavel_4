const Contagem = require("../ContagemValoresInteirosJS");
test("Quantidade de números inteiros no intervalo de 1 a 10 deve ser 10",() =>{
    expect(Contagem(10)).toBe(10);
});
test("Quantidade de números inteiros no intervalo de 1 a 10 deve ser 10",() =>{
    expect(Contagem(5)).toBe(5);
});