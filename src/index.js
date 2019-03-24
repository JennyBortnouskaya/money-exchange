module.exports = function makeExchange(currency) {
    let money = {};
    
    if (currency >= 10000) {
        return {
            error: "You are rich, my friend! We don't have so much coins for exchange"
        }
    }

    if (currency >= 50) {
        money.H = Math.floor(currency / 50);
        currency %= 50;
    }

    if (currency >= 25) {
        money.Q = Math.floor(currency / 25);
        currency %= 25;
    }

    if (currency >= 10) {
        money.D = Math.floor(currency / 10);
        currency %= 10;
    }

    if (currency >= 5) {
        money.N = Math.floor(currency / 5);
        currency %= 5;
    }

    if (currency >= 1) {
        money.P = Math.floor(currency / 1);
        currency %= 1;
    }
    
    return money;
}
