const Primo = require("../PrimoJS");
test("O numéro 7 deve ser primo:", () => {
    expect(Primo(7)).toBe(true);
})
test("O numéro 2 não deve ser primo:", () => {
    expect(Primo(4)).toBe(false);
})