// function makeNegative(x){
//     if(Math.sign(x)){
//         return x*1;
//     }else{
//         return (x-x) - x;
//     }
// }

const makeNegative = number => -Math.abs(number);

console.log(makeNegative(42));