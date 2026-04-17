const sumAll = function(a,b) {
// Do not edit below this line
let sum= 0 ;
    if (a<b){
        for(let i = a ; i <= b; i++){
         sum += i;
        }
    return sum;
    }else if(a>b){
        for(let i = b ; i <= a; i++){
         sum += i;
        }
    return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
