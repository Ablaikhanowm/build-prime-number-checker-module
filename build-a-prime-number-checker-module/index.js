function isPrime(int){
    if(int < 2) return false;

    for(let i=2; i<=Math.sqrt(int); i++){
        if(int % i === 0) return false;
    }
    return true;
}

module.exports = {
    isPrime
};