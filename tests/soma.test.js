const Soma = require("../SomaJS");
test("A soma entre 2 e 5 tem que ser 7", () => {
    expect(Soma(2,5)).toBe(7);
})
test("A soma entre 1 e 10000123 tem que ser 10000124", () => {
    expect(Soma(1, 10000123)).toBe(10000124);
})