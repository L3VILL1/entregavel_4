function FibonacciJS(N){
  let n1, n2, sucessor;
  n1 = 0;
  n2 = 1;
  if (N <= 0){
    return []
  }else if (N ==1){
    return [0]
  }else if (N==2){
    return [0,1]
  }
  numeros = [0, 1]
  for (i=2;i< N; i++){
    sucessor = n1 + n2;
    n1 = n2;
    n2 = sucessor;
    numeros.push(sucessor);
  }
  return numeros
}
module.exports = FibonacciJS;