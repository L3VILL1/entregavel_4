function mdcjs(A,B){

let mdc = 0;

if (A < B) {
for (let i = 1; i <= A; i++) {
if (A % i === 0 && B % i === 0) {
mdc = i;
}
}
} else if (B < A) {
for (let i = 1; i <= B; i++) {
if (A % i === 0 && B % i === 0) {
mdc = i;
}
}
} else {
mdc = A; 
}
return mdc;
}
module.exports = mdcjs;