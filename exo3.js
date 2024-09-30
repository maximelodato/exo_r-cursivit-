const computePowerIt = (n, p) => {
    if (p < 0) {
        return 0; 
    }

    let result = 1; 

    for (let i = 0; i < p; i++) {
        result *= n; 
    }

    return result; 
};


console.log(computePowerIt(2, 5));  // Affiche 32
