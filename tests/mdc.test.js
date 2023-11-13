const MDC = require("../mdcjs");
test("O mds entre 22 e 6 deve ser 2", () => {
    expect(MDC(22, 6)).toBe(2);
})
test("O mds entre 100 e 257 deve ser 1", () => {
    expect(MDC(100, 257)).toBe(1);
})