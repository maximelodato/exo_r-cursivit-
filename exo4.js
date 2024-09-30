const computePowerRec = (n, p) => {
 
    if (p < 0) {
        return 0; 
    }
    
    if (p === 0) {
        return 1;
    }

    return n * computePowerRec(n, p - 1);
};

console.log(computePowerRec(2, 5));  // Affiche 32 (2^5 = 32)