const isPrimeNumber = (n) => {
    if (n < 2) return false;

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }

    return true;
};

const findSupPrime = (n) => {
    // On utilise une boucle pour trouver le premier nombre premier >= n
    while (!isPrimeNumber(n)) {
        n++;  // Incrémente n tant qu'il n'est pas premier
    }

    return n; 
};

console.log(findSupPrime(10));  // Affiche 11