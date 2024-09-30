const isPrimeNumber = (n) => {
    if (n < 2) {
        return false;
    }

    // On vérifie si n est divisible par un nombre entre 2 et la racine carrée de n
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false; 
        }
    }

    return true;
};

console.log(isPrimeNumber(6));  // Affiche false