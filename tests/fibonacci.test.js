const Fibonacci = require("../FibonacciJS");
test('os 10 primeiros numeros da contagem fibonacci devem ser', () =>{
    expect(Fibonacci(10)).toMatchObject([0,1,1,2,3,5,8,13,21,34]);
})
test("os dois primeiros numeros do fibo devem ser 0 e 1:", ()=>{
    expect(Fibonacci(2)).toMatchObject([0,1]);
})