// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
let coins = currency;	
let h = 50; 
let q = 25; 
let d = 10; 
let n = 5; 
let p = 1;
let makeExchange = {};
    
if(coins <= 10000) { 
    let result_H = (coins - coins % h)/h; 

    if(result_H > 0){
    makeExchange.H = result_H;
    };
    let result_Q = (coins % h - coins % h % q)/q;

    if(result_Q > 0){
     makeExchange.Q = result_Q;   
    };
    let result_D = (coins % h % q - coins % h % q % d)/d; 

    if(result_D > 0){  
    makeExchange.D = result_D;
    };
    let result_N = (coins % h % q % d - coins % h % q % d % n)/n; 
    
    if(result_N > 0){
    makeExchange.N = result_N;
    };    
    let result_P = (coins % h % q % d % n -  coins % h % q % d % n % p)/p; 

    if(result_P > 0){
    makeExchange.P = result_P;
    }; 

    } else { 
        makeExchange.error = "You are rich, my friend! We don't have so much coins for exchange"};
        return makeExchange;
}
