const quick = require("../Quicksortjs");

test("Os números 1, 6, 2, 6, 9, 10, 3 devem ficar 1, 2, 3, 6, 6, 9, 10", () => {
    expect(quick([1, 6, 2, 6, 9, 10, 3])).toEqual([1, 2, 3, 6, 6, 9, 10]);
});

test("Os números 1, 6, 2, 2, 9, 233, 3 devem ficar 1, 2, 2, 3, 6, 9, 233", () => {
    expect(quick([1, 6, 2, 2, 9, 233, 3])).toEqual([1, 2, 2, 3, 6, 9, 233]);
});
